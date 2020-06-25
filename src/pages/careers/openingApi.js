const OpeningAPI = {
  players: [
    {
      jobId: 0,
      route: "design-researcher",
      jobDescription: "Design Researcher",
      jobTitle: "Look at this! It's a full time job.",
      jobIntro:
        "A design researcher's job is to learn about people in a specific context to identify the areas in which a designed solution can have better impact. Design researchers have many different backgrounds (sociology, psychology, industrial design, etc.). What they all have in common are soft skills such as observation, listening, empathy, synthesis and analysis."
    },

    {
      jobId: 1,
      route: "business-manager",
      jobDescription: "Business Manager",
      jobTitle: "Look at this! It's a full time job.",
      jobIntro:
        "Simply put, business managers build a relationship with clients. They listen, observe and empathize with them to clearly understand their business processes and challenges. They're also armed with a creative/strategic bent of mind to navigate to the best possible solutions."
      // jobAbout:
      //   "As a Visual Designer, you’ll be responsible for taking design projects from brief to completion by partnering closely with our Marketing team. To be successful in this role, you will collaborate cross-functionally with User Acquisition, CRM and other teams on a daily basis in order to work on digital marketing assets through to physical marketing assets like in-theater posters and Out-Of-Home advertising. This is a great career opportunity for a passionate designer eager to work on a wide range of projects within a fast-growing company. This role reports to the Creative Director.",
      // jobRole: [
      //   "Concept and execute assets for paid and owned digital channels (banners and social)",
      //   "Concept and execute print materials from billboards, posters and leaflets and newsletters",
      //   "Work closely with the Marketing team to create strong concepts from the initial briefing",
      //   "Create and own innovative ideas to drive highest performing campaigns from formal & informal briefs",
      //   "Understand design principles and be plugged in to the latest design trends and new technologies",
      //   "Work with CRM team to strategize, concept and design compelling email campaigns",
      //   "Production design work for print and web."
      // ],
      // experience: "5-8 years",
      // skills: "2D, Adobe Illustrator, Adobe Photoshop, Art Direction, Sketch"
    },

    {
      jobId: 3,
      route: "social-media-manager",
      jobDescription: "Social Media Manager",
      jobTitle: "Look at this! It's a full time job.",
      jobIntro:
        "Social media managers are in charge of representing a company across social channels as the sole voice of the brand. They respond to comments, compile campaigns and create content. These experts provide organizations with the guidance needed to enhance their online presence."
      // jobAbout:
      //   "Social media managers are in charge of representing a company across social channels as the sole voice of the brand. They respond to comments, compile campaigns and create content. These experts provide organizations with the guidance needed to enhance their online presence.",
      // jobRole: [
      //   "Concept and execute assets for paid and owned digital channels (banners and social)",
      //   "Concept and execute print materials from billboards, posters and leaflets and newsletters",
      //   "Work closely with the Marketing team to create strong concepts from the initial briefing",
      //   "Create and own innovative ideas to drive highest performing campaigns from formal & informal briefs",
      //   "Understand design principles and be plugged in to the latest design trends and new technologies",
      //   "Work with CRM team to strategize, concept and design compelling email campaigns",
      //   "Production design work for print and web."
      // ],
      // experience: "1-3 years",
      // skills: "2D, Adobe Illustrator, Adobe Photoshop, Art Direction, Sketch"
    }
  ],
  all: () => OpeningAPI.players,
  get: id => {
    const isPlayer = p => p.jobId === id;
    return OpeningAPI.players.find(isPlayer);
  }
};

export default OpeningAPI;
