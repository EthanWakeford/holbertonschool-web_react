interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentClass {
  firstName: string;
  lastName: string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = this.firstName;
    this.lastName = this.lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}
