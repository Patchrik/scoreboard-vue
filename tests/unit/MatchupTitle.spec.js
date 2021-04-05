import { mount } from "@vue/test-utils";
import ScoreBoard from "@/components/ScoreBoard.vue";

describe("ScoreBoard.vue", () => {
  it("renders both teams' names", () => {
    const componentWrapper = mount(ScoreBoard, {
      propsData: {
        team1: { name: "Team 1", score: 0 },
        team2: { name: "Team 2", score: 0 },
      },
    });

    const team1Input = componentWrapper.find("#TeamInput1");
    const team2Input = componentWrapper.find("#TeamInput2");

    expect(team1Input.element.value).toBe("Team 1");
    expect(team2Input.element.value).toBe("Team 2");
  });
});
