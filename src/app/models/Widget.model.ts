export interface Widget {
  name: string;
  id: string;
  type: string;
  description: string;
  used: boolean;
}

export interface WidgetResource {
  widgets: Widget[];
}
