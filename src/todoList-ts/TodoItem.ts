/**
 * an object that represents a task to complete
 * 
 * what if this object is coming from an external service and it 
 * goes out of sync due to some changes server side?
 */

namespace Techbar {

    export interface ITodoItem {
        id: number;
        task: string;
        completed: boolean;
    }

    export class TodoItem implements ITodoItem {
        id: number;
        task: string;
        completed: boolean;

        constructor(id: number, task: string) {
            this.id = id;
            this.task = task;
        }
    }
    /*
    class TodoItem {
        completed: boolean;
        
        constructor(
            public id: number, 
            public task: string) {
        }
    }
    */
}