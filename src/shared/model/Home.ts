type sliders = {
  id : number,
  image: string,
  title: string,
  content: string,
}

type features = {
  id: number,
  title: string,
}

type services = {
  id: number,
  title: string,
  content: string,
}

export interface Home {
  sliders: sliders[],
  about: {
    imageOne: string,
    imageTwo: string,
    title: string,
    content: string,
    features: features[],
  },
  services: services[],
}