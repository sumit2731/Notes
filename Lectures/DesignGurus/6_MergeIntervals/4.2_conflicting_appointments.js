class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      process.stdout.write(`[${this.start}, ${this.end}]`);
    }
  }
  /**
   * My Solition- course solution misses a bug
   */
  function conflictingAppointMents(intervals) {
    intervals.sort((a,b) => a.start-b.start);
    let lastEndedInterval = intervals[0], result = [], currentPointer = 1;
    while(currentPointer < intervals.length) {
        if(intervals[currentPointer].start < lastEndedInterval.end) {
            result.push([
                [lastEndedInterval.start,lastEndedInterval.end], 
                [intervals[currentPointer].start,intervals[currentPointer].end]
            
            ]);
        }
        if(lastEndedInterval.end <= intervals[currentPointer].end) lastEndedInterval = intervals[currentPointer];
        currentPointer++;
    }
    return result;
  }
  
  
  console.log(`These Meetinga Has Conflict: ${conflictingAppointMents([
    new Interval(4,5),
    new Interval(2, 3),
    new Interval(3,6),
    new Interval(5,7),
    new Interval(7,8),
  ])}`);