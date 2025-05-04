export class Task {
  constructor(title, description, alarm) {
    this.Title = title;
    this.Description = description;
    const now = new Date();
    this.Taskdate = alarm ? now.toLocaleDateString() : null;
    this.Tasktime = alarm ? now.toLocaleTimeString() : null;
  }
}