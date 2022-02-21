import { surveyIsActiveToday, surveyIsActive } from ".";

describe("surveyIsActiveToday", () => {
  describe("with no survey days", () => {
    it("returns false", () => {
      expect(surveyIsActiveToday(undefined)).toBeFalsy();
    });
  });

  describe("with a survey day of yesterdays date", () => {
    it("returns true", () => {
      expect(surveyIsActiveToday([yesterday()])).toBeFalsy();
    });
  });

  describe("with a survey day of today date", () => {
    it("returns true", () => {
      expect(surveyIsActiveToday([new Date()])).toBeTruthy();
    });
  });
});

describe("surveyIsActive", () => {
  describe("when there was an active survey day yesterday", () => {
    describe("and there are no other active survey days", () => {
      it("returns false", () => {
        expect(surveyIsActive([yesterday()])).toBeFalsy();
      });
    });

    describe("and there is an active survey day today", () => {
      it("returns true", () => {
        expect(surveyIsActive([yesterday(), new Date()])).toBeTruthy();
      });
    });

    describe("and there is an active survey day tomorrow", () => {
      it("returns true", () => {
        expect(surveyIsActive([yesterday(), tomorrow()])).toBeTruthy();
      });
    });
  });

  describe("when there is only a survey day today", () => {
    it("returns true", () => {
      expect(surveyIsActive([new Date()])).toBeTruthy();
    });
  });
});

function yesterday(): Date {
  const date = new Date();
  return new Date(date.setDate(date.getDate() - 1));
}

function tomorrow(): Date {
  const date = new Date();
  return new Date(date.setDate(date.getDate() + 1));
}
