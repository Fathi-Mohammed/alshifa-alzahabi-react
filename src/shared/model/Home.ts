export type sliders = {
  id: number;
  image: string;
  title: string;
  content?: string;
};

export type about = {
  imageTwo: string;
  image: string;
  title: string;
  content: string;
  features?: features[];
};

export type features = {
  id: number;
  title: string;
};

export type services = {
  id: number;
  title: string;
  content: string;
  has_unanswered_order: boolean;
};

export interface Home {
  sliders: sliders[];
  about: about;
  services: services[];
}
