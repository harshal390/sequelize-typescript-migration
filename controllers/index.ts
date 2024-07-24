import db from "../models";
import { projects } from "../seeders/projects";
import { userProjects } from "../seeders/userprojects";
import { users } from "../seeders/users";

export const createUsers = () => {
  users.map(async (user) => {
    try {
      await db.User.create(user);
    } catch (error) {
      console.log(error);
    }
  });
};

export const createProjects = () => {
  projects.map(async(project) => {
    try {
      await db.Project.create(project);
    } catch (error) {
      console.log(error);
    }
  });
};

export const createUserProjects = () => {
  userProjects.map(async(el) => {
    try {
      await db.UserProject.create(el);
    } catch (error) {
      console.log(error);
    }
  });
};
