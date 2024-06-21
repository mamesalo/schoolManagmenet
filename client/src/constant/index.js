import Student from "src/assets/student.svg";
import Teacher from "src/assets/teacher.svg";
import Admin from "src/assets/admin.svg";

import Email from "src/assets/email.svg";
import Password from "src/assets/password.svg";
import eyeOff from "src/assets/eye_hide.svg";
import EyehShow from "src/assets/eye_show.svg";

import Dashboard from "src/assets/dashboard.svg";
import Announcement from "src/assets/announcement.svg";
import Assignment from "src/assets/assignment.svg";
import Classes from "src/assets/class.svg";
import Event from "src/assets/event.svg";
import Exam from "src/assets/exam.svg";
import Library from "src/assets/library.svg";
import Performance from "src/assets/performance.svg";
import Setting from "src/assets/setting.svg";

export const homeNav = [
  {
    toPage: "about",
    label: "About",
  },
  {
    toPage: "product",
    label: "Product",
  },
  {
    toPage: "contact",
    label: "Contact Us",
  },
];

export const homeHeaderSignIn = [
  {
    toPage: "/login",
    label: "Sign In",
  },
];

export const loginChooseUser = [
  {
    label: "Student",
    to: "student",
    icon: Student,
  },
  {
    label: "Teacher",
    to: "teacher",
    icon: Teacher,
  },
  {
    label: "Admin",
    to: "admin",
    icon: Admin,
  },
];

export const logininFormText = {
  placeholder: "Email",
  name: "email",
  type: "email",
  isRequired: true,
  prefixIcon: Email,
};

export const logininFormPassword = {
  placeholder: "Password",
  name: "password",
  prefixIcon: Password,
  eyeOffIcon: eyeOff,
  eyeShowIcon: EyehShow,
};

export const sidebarNavAdmin = [
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Dashboard,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Teacher,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Student,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Announcement,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Assignment,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Classes,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Event,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Exam,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Library,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Performance,
  },
  {
    label: "DashBoard",
    to: "dashboard",
    icon: Setting,
  },
];
