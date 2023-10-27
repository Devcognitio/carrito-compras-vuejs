export type CarImage = {
  name: string;
  url: string;
};

export type Car = {
  id: number;
  name: string;
  max_speed: number;
  year: number;
  color: string;
  hp: number;
  hybrid: string;
  price: number;
  stars: number;
  country: string;
  url_image: CarImage[];
};

export type CarMake = {
  make: string;
  logo: string;
  values: Car[];
};

export type CarData = {
  cars: CarMake[];
};
