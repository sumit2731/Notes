interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async () => {
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  // const matt = {} as LukeSkywalker; //here typescripot will also adjust the return typeof function
  // const matt2: LukeSkywalker = {};

  return data as LukeSkywalker;
};
