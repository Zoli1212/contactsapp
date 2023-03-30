import { lazy } from "react";

import {RegisterComponent }from "../containers/register";
import {LoginComponent } from "../containers/login";
import {ContactsComponent} from "../containers/contacts";

const CreateContactComponent = lazy(() =>
  import("../containers/createcontact")
);

const routes = [
  {
    path: "/auth/register",
    component: RegisterComponent,
    title: "Register",
    needsAuth: false,
  },

  {
    path: "/auth/login",
    component: LoginComponent,
    title: "Login",
    needsAuth: false,
  },
  {
    path: "/contacts/create",
    component: CreateContactComponent,
    title: "Create Contact",
    needsAuth: true,
  },
  {
    path: "/",
    component: ContactsComponent,
    title: "Contacts",
    needsAuth: true,
  },
];

export default routes;
