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
  {
    title: "Tlancer Landing Page",
    image: "/cv-react/images/tlancer.webp",
    tools: ["ReactJS", "Bootstrap", "HTML", "CSS", "JavaScript"],
    description:
      "Developed a modern, responsive landing page for Tlancer using React and Bootstrap. Implemented a custom language toggler and integrated frontend forms with backend APIs. Currently contributing to the MVP of the company's educational platform.",
    site: "https://www.tlancer.ge/",
    repo: "https://github.com/Tlancerinc/Tlancermain",
  },
  {
    title: "WeatherExpress.js",
    image: "/cv-react/images/weatherApp.webp",
    tools: ["NodeJS", "ExpressJS", "EJS", "HTML", "CSS", "JavaScript", "NPM"],
    description:
      "Built a backend weather application using Node.js, Express, and EJS templates. Integrated OpenWeather API for real-time data and implemented dynamic views for enhanced user experience.",
    site: "https://calm-springs-33834.herokuapp.com/",
    repo: "https://github.com/guthribm/WeatherExpress",
  },
  {
    title: "Tic.Tac.Toe",
    image: "/cv-react/images/tictactoimg.webp",
    tools: ["ReactJS", "HTML", "CSS", "JavaScript"],
    description:
      "Enhanced the classic Tic Tac Toe game with score tracking and custom animations. Built with React for interactive gameplay and a polished UI.",
    site: "https://guthribm.github.io/tic-tac-toe/",
    repo: "https://github.com/guthribm/tic-tac-toe",
  },
  {
    title: "The One and Oney Business Page",
    image: "/cv-react/images/oneyScreens.webp",
    tools: ["JQuery", "HTML", "CSS", "JavaScript"],
    description:
      "Designed, photographed, and developed a mobile-first business website. Optimized assets and implemented responsive layouts for seamless user experience.",
    site: "https://www.theoneandoneydispo.com/",
    repo: "https://github.com/guthribm/OneAndOney",
  },
  {
    title: "Simple BlackJack",
    image: "/cv-react/images/blackjack-screens.webp",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "Created a responsive BlackJack game using ES6 and deckofcardsapi.com. Features modern UI and mobile-friendly design.",
    site: "https://guthribm.github.io/SimpleBlackJack/",
    repo: "https://github.com/guthribm/SimpleBlackJack",
  },
  {
    title: "Rock | Paper | Scissors",
    image: "/cv-react/images/rps-screens.webp",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "Developed a fully responsive Rock, Paper, Scissors app with smooth animations and event-driven gameplay. Built as a FrontendMentor.io challenge.",
    site: "https://guthribm.github.io/rock-paper-scissors/",
    repo: "https://github.com/guthribm/rock-paper-scissors",
  },
  {
    title: "Splitter Tip Calculator",
    image: "/cv-react/images/splitter-screens.webp",
    tools: ["HTML", "CSS", "JavaScript"],
    description:
      "Designed a tip calculator with responsive layouts using Flexbox and Grid. Enhanced UX for both mobile and desktop users.",
    site: "https://guthribm.github.io/splitter-tip-calculator/",
    repo: "https://github.com/guthribm/splitter-tip-calculator",
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
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Fade in timeout={800 + idx * 100}>
              <Card
                elevation={6}
                sx={{
                  borderRadius: 4,
                  background: "linear-gradient(135deg, #222 60%, #415a77 100%)",
                  color: "#fff",
                  boxShadow: `0 4px 24px 0 #007fff33`,
                  transition:
                    "transform 0.3s cubic-bezier(.25,1,.5,1), box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.04) translateY(-4px)",
                    boxShadow: `0 8px 32px 0 #61dafb55`,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image}
                  alt={project.title}
                  sx={{ borderRadius: 4, objectFit: "cover" }}
                />
                <CardContent>
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
                  <Typography variant="body1" sx={{ mb: 2, minHeight: 64 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.site}
                      target="_blank"
                      startIcon={<LaunchIcon />}
                      sx={{ fontWeight: 700, textTransform: "none" }}
                    >
                      Live Site
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      href={project.repo}
                      target="_blank"
                      startIcon={<GitHubIcon />}
                      sx={{ fontWeight: 700, textTransform: "none" }}
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
