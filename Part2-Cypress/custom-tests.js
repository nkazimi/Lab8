describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });
describe("the main function",() => {
   it("returns 3 for the iconvolume variable if the volume is greater than 66",() => {
        expect(main(67)).toBe("./assets/media/icons/volume-level-3.svg")
   })
   it("returns 2 for the iconvolume variable if the volume is greater than 33",() => {
        expect(main(34)).toBe("./assets/media/icons/volume-level-2.svg")
    })
    it("returns 1 for the iconvolume variable if the volume is greater than 0",() => {
        expect(main(1)).toBe("./assets/media/icons/volume-level-1.svg")
    })
    it("returns 0 for the iconvolume variable if the volume is equal 0",() => {
        expect(main(0)).toBe("./assets/media/icons/volume-level-0.svg")
    })
})
