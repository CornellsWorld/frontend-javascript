/// <reference path="./Teacher.ts" />

namespace Subjects {
  interface Subject {
    teacher: Teacher;
    setTeacher(teacher: Teacher): void;
  }

  class Subject implements Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}