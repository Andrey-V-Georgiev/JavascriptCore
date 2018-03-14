class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
    }

    priority() {
        if (this.isOverdue) {
            return 0;
        } else if (this.status === 'In Progress') {
            return 1;
        } else if (this.status === 'Open') {
            return 2;
        } else {
            return 3;
        }
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value < Date.now()) {
            throw new Error();
        }
        this._deadline = value;
    }

    get isOverdue() {
        return  this.deadline < Date.now()
            && this.status !== 'Complete';
    }

    get statusIcon() {
        if (this.isOverdue) {
            return '\u26A0';
        } else if(this.status === 'Open'){
            return '\u2731';
        } else if (this.status === 'In Progress'){
            return '\u219D';
        } else {
            return '\u2714';
        }
    }

    static comparator(a, b) {
        let diff = a.priority() - b.priority();
        if (diff !== 0) {
            return diff;
        } else {
            return a.deadline - b.deadline;
        }
    }

    toString() {
        let deadline = this.isOverdue ? `(overdue)` : `(deadline: ${this.deadline.toString()})`;
        return `[${this.statusIcon}] ${this.title} ${deadline}`;
    }
}

