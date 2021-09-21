const router = require("express").Router();

const routes = {
  About: {
    version: "1.0.0",
    type: "educational",
    author: "github:firatmelih",
    readMe:
      "This is documentation for Netflix_M512_API you can find all endpoints bellow.",
  },
  Users: {
    read: {
      byId: "GET: /api/users/find/:id",
      all: "GET: /api/users/",
      stats: "GET: /api/users/stats",
    },
    update: "PUT: /api/users/:id",
    delete: "DELETE: /api/users/:id",
  },
  Auth: {
    register: "POST: /api/auth/register",
    login: "POST: /api/auth/login",
  },
  Movies: {
    create: "POST: /api/movies/",
    read: {
      byId: "GET: /api/movies/find/:id",
      randomMovie: "GET: /api/movies/random",
      randomSeries: "GET: /api/movies/random?type=series",
      all: "GET: /api/movies/",
    },
    update: "PUT: /api/movies/:id",
    delete: "DELETE: /api/movies/:id",
  },
  Lists: {
    create: "POST: /api/lists/",
    read: {
      byId: "GET: /api/lists/find/:id",
      specific: {
        movie: "GET: /api/lists/?type=movie",
        series: "GET: /api/lists/?type=series",
        movieCrime: "GET: /api/lists/?type=movie&genre=crime",
        seriesCrime: "GET: /api/lists/?type=series&genre=crime",
      },
    },
    delete: "DELETE: /api/lists/:id",
  },
};

router.get("/", async (req, res) => {
  try {
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
