import { Request, Response, NextFunction } from "express";
import * as tasksService from "./tasks.service";

async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await tasksService.getAll());
    } catch (err) {
      console.error(`Error while getting the tasks`, err.message);
      next(err);
    }
  }

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tasksService.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting the task`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tasksService.create(req.body));
  } catch (err) {
    console.error(`Error while creating the task`, err.message);
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tasksService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating the task`, err.message);
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await tasksService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting the task`, err.message);
    next(err);
  }
}

export { getAll, get, create, update, remove };