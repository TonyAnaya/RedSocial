const searchController = require("../controller/search");
const expect = require("chai").expect;

describe("Testing search", () => {

  describe("Check search User ", () => {
    it("Check return value: Datos de Antonio ", () => {
      let result = searchController.searchUser("antonio");
      let expected = [
        {
          email: 'tony@tony.com',
          name: 'Antonio',
          last_name: 'Anaya',
          brd_date: '1992-01-31',
          foto: 'https://elfarandi.com/wp-content/uploads/2021/01/Chems-768x576.jpg',
          fondo: 'https://i.blogs.es/0ca5da/ambulo_polar_wide/450_1000.jpg',
          ciudad: 'Cuidadcita',
          pais: 'Guarana',
          link: 'https://linkedin.com/in/jose-antonio-anaya-fuentes',
          git: 'https://github.com/TonyAnaya',
          descri: 'La sensoalidad no se crea ni se destruye, solo se disfruta'
        }
      ]
      expect(result).to.equal(expected);
    });
    it("Check return value: Datos de Mariano ", () => {
        let result = pokemonController.add("sepsi");
        let expected = [
            {
              email: 'mariano@gmail.com',
              name: 'Mariano',
              last_name: 'Sepsi',
              brd_date: '2001-07-17',
              foto: 'https://agenciameme.com/wp-content/uploads/2021/01/Chems.jpg',
              fondo: 'https://i.blogs.es/0ca5da/ambulo_polar_wide/450_1000.jpg',
              ciudad: null,
              pais: null,
              link: null,
              git: null,
              descri: null
            }
          ]
        expect(result).to.equal(expected);
      });
  });

});