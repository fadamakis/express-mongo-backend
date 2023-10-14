import { Request, Response, NextFunction } from "express";
import * as listsService from "./lists.service";

async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await listsService.getAll());
    } catch (err) {
      console.error(`Error while getting the lists`, err.message);
      next(err);
    }
  }

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await listsService.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting the list`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await listsService.create(req.body));
  } catch (err) {
    console.error(`Error while creating the list`, err.message);
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await listsService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating the list`, err.message);
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await listsService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting the list`, err.message);
    next(err);
  }
}

export { getAll, get, create, update, remove };