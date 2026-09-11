import { Router, type IRouter } from "express";
import { AnalyzeRepositoryBody, AnalyzeRepositoryResponse } from "@workspace/api-zod";
import { AnalysisError, analyzeRepository } from "../lib/analyzer";

const router: IRouter = Router();

router.post("/analysis", async (req, res) => {
  const parsed = AnalyzeRepositoryBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Enter a valid GitHub repository URL." });
    return;
  }

  try {
    const report = await analyzeRepository(parsed.data.repositoryUrl);
    res.json(AnalyzeRepositoryResponse.parse(report));
  } catch (error) {
    if (error instanceof AnalysisError) {
      req.log.warn({ statusCode: error.statusCode, message: error.message }, "Repository analysis rejected");
      res.status(error.statusCode).json({ error: error.message });
      return;
    }

    req.log.error({ err: error }, "Repository analysis failed");
    res.status(502).json({ error: "The repository could not be analyzed right now. Please try again." });
  }
});

export default router;