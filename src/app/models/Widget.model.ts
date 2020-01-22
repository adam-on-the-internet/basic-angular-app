export interface Widget {
  name: string;
  id: string;
  type: string;
  description: string;
  age: number;
  used: boolean;
}

export interface WidgetResource {
  widgets: Widget[];
}
