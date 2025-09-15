import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Grid,
  Box,
  Fade,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  //   {
  //     title: "Healthcare Provider Platform",
  //     image: "/cv/images/tlancer.webp", // We'll use the same placeholder image for now
  //     tools: ["React", "Material-UI", "C#", "ASP.NET", "MongoDB", "Angular"],
  //     description:
  //       "Led the migration of a large-scale healthcare provider application from Angular to React. Designed and implemented patient care plan interfaces, built patient onboarding APIs, and created clinical workflow UI components. Improved application performance and user experience for healthcare professionals.",
  //     site: "",
  //     repo: "",
  //     isDisabled: true,
  //   },
  {
    title: "Tlancer Educational Platform",
    image: "/cv/images/tlancer.webp",
    tools: ["React", "Bootstrap", "Next.js", "JavaScript", "APIs"],
    description:
      "Developed modern, responsive web applications for Tlancer's educational platform. Built landing pages, implemented custom features, and integrated frontend forms with backend APIs. Contributed to multiple Next.js projects and platform MVP development.",
    site: "https://www.tlancer.ge/",
    repo: "https://github.com/Tlancerinc/Tlancermain",
    isDisabled: true,
  },
  {
    title: "WeatherExpress.js",
    image: "/cv/images/weatherApp.webp",
    tools: ["NodeJS", "ExpressJS", "EJS", "HTML", "CSS", "JavaScript", "NPM"],
    description:
      "Built a backend weather application using Node.js, Express, and EJS templates. Integrated OpenWeather API for real-time data and implemented dynamic views for enhanced user experience.",
    site: "https://calm-springs-33834.herokuapp.com/",
    repo: "https://github.com/guthribm/WeatherExpress",
    isDisabled: true,
  },
  {
    title: "Tic.Tac.Toe",
    image: "/cv/images/tictactoimg.webp",
    tools: ["ReactJS", "HTML", "CSS", "JavaScript"],
    description:
      "Enhanced the classic Tic Tac Toe game with score tracking and custom animations. Built with React for interactive gameplay and a polished UI.",
    site: "https://guthribm.github.io/tic-tac-toe/",
    repo: "https://github.com/guthribm/tic-tac-toe",
    isDisabled: false,
  },
  //   {
  //     title: "The One and Oney Business Page",
  //     image: "/cv/images/oneyScreens.webp",
  //     tools: ["JQuery", "HTML", "CSS", "JavaScript"],
  //     description:
  //       "Designed, photographed, and developed a mobile-first business website. Optimized assets and implemented responsive layouts for seamless user experience.",
  //     site: "https://www.theoneandoneydispo.com/",
  //     repo: "https://github.com/guthribm/OneAndOney",
  //   },
  {
    title: "Simple BlackJack",
    image: "/cv/images/blackjack-screens.webp",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "Created a responsive BlackJack game using ES6 and deckofcardsapi.com. Features modern UI and mobile-friendly design.",
    site: "https://guthribm.github.io/SimpleBlackJack/",
    repo: "https://github.com/guthribm/SimpleBlackJack",
    isDisabled: false,
  },
  {
    title: "Rock | Paper | Scissors",
    image: "/cv/images/rps-screens.webp",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "Developed a fully responsive Rock, Paper, Scissors app with smooth animations and event-driven gameplay. Built as a FrontendMentor.io challenge.",
    site: "https://guthribm.github.io/rock-paper-scissors/",
    repo: "https://github.com/guthribm/rock-paper-scissors",
    isDisabled: false,
  },
  {
    title: "Splitter Tip Calculator",
    image: "/cv/images/splitter-screens.webp",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "Designed a tip calculator with responsive layouts using Flexbox and Grid. Enhanced UX for both mobile and desktop users.",
    site: "https://guthribm.github.io/splitter-tip-calculator/",
    repo: "https://github.com/guthribm/splitter-tip-calculator",
    isDisabled: false,
  },
];

export default function Projects() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "80vh",
        background: "linear-gradient(120deg, #1b263b 0%, #415a77 100%)",
        py: 8,
        px: { xs: 2, md: 6 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 800,
          mb: 6,
          background: "linear-gradient(90deg, #61dafb 0%, #007fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Featured Projects
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: "1200px" }}
      >
        {projects.map((project, idx) => (
          <Grid item key={project.title}>
            <Fade in timeout={800 + idx * 100}>
              <Card
                elevation={6}
                sx={{
                  width: 400,
                  height: 590,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #222 60%, #415a77 100%)",
                  color: "#fff",
                  boxShadow: `0 4px 24px 0 #007fff33`,
                  transition:
                    "transform 0.3s cubic-bezier(.25,1,.5,1), box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.02) translateY(-4px)",
                    boxShadow: `0 8px 32px 0 #61dafb55`,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 200,
                    overflow: "hidden",
                    borderRadius: "16px 16px 0 0",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      backgroundColor: "#f5f5f5",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={700} gutterBottom>
                    {project.title}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    {project.tools.map((tool) => (
                      <Chip
                        key={tool}
                        label={tool}
                        color="primary"
                        variant="outlined"
                        size="small"
                        sx={{ fontWeight: 600, letterSpacing: "0.03em" }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      flex: 1,
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                      mt: "auto",
                    }}
                  >
                    <Button
                      variant="contained"
                      disabled={project.isDisabled}
                      color="primary"
                      href={project.site}
                      target="_blank"
                      startIcon={<LaunchIcon />}
                      sx={{
                        fontWeight: 700,
                        textTransform: "none",
                      }}
                    >
                      Live Site
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      href={project.repo}
                      target="_blank"
                      startIcon={<GitHubIcon />}
                      sx={{
                        fontWeight: 700,
                        textTransform: "none",
                      }}
                    >
                      Repo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
