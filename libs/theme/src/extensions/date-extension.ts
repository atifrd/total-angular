interface Date {
  getUtcFullDate(): Date;
}

Date.prototype.getUtcFullDate = function (): Date {
  var date = new Date(this.valueOf());
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
  );
};
