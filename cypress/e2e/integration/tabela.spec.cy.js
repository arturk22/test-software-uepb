describe("Tabelas", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/tables");
  });

  it("should sort Table 1 data by First Name", () => {
    cy.get("#table1 thead th span").contains("First Name").click();

    cy.get("#table1 tbody tr").each((row, index) => {
      cy.wrap(row)
        .find("td:nth-child(2)")
        .invoke("text")
        .then((firstName) => {
          if (index > 0) {
            cy.get("#table1 tbody tr")
              .eq(index - 1)
              .find("td:nth-child(2)")
              .invoke("text")
              .then((prevFirstName) => {
                expect(firstName).to.satisfy((currentFirstName) => {
                  return currentFirstName >= prevFirstName;
                });
              });
          }
        });
    });
  });

  it("should sort Table 2 data by Last Name", () => {
    cy.get('#table2 thead th span').contains('Last Name').click();

    cy.get("#table2 tbody tr").each((row, index) => {
      cy.wrap(row)
        .find("td:nth-child(1)")
        .invoke("text")
        .then((lastName) => {
          if (index > 0) {
            cy.get("#table2 tbody tr")
              .eq(index - 1)
              .find("td:nth-child(1)")
              .invoke("text")
              .then((prevLastName) => {
                expect(lastName).to.satisfy((currentLastName) => {
                  return currentLastName >= prevLastName;
                });
              });
          }
        });
    });
  });
});
