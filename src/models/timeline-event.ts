export class TimelineEvent {
  logo: string;
  employer: string;
  title: string;
  type: string;
  startDate: Date;
  endDate: Date;
  website: string;
  teamSize: Number;
  works: string[];
  screenshots: string[];

  constructor({ 
    logo = '', 
    employer = '', 
    title = '',
    type = '',
    startDate = new Date(), 
    endDate = new Date(), 
    website = '', 
    teamSize = 0, 
    works = [], 
    screenshots = [] 
  }) {
    this.logo = logo;
    this.employer = employer;
    this.title = title;
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
    this.website = website;
    this.teamSize = teamSize;
    this.works = works;
    this.screenshots = screenshots;
  }

  getDisplayDate(date): string {
    const displayFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short' });
    const displayDate = displayFormat.format(date);
    const displayNow = displayFormat.format(new Date());
    return displayDate === displayNow ? 'Now' : displayDate;
  } 
  displayStartDate(): string {
    return this.getDisplayDate(this.startDate);
  }
  displayEndDate(): string {
    return this.getDisplayDate(this.endDate);
  }
  periodByMonths(): Number {
    return (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12 + (this.endDate.getMonth() - this.startDate.getMonth());
  }
}
