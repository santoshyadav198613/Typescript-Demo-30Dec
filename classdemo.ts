export class DepartmentList   {
    private id: number;
    protected name: string;
    head: string;
    employeeCount: number;

    constructor(name: string, head: string) {
        this.name = name;
        this.head = head;
    }
    get deptid(): number {
        return this.id;
    }

    set deptid(id: number) {
        this.id = id;
    }

    add(num1: number, num2: number): number {
        return num1 + num2;
    }
}
