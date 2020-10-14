import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';

import MovieRow from '@/components/MovieRow';
import api from '@/services/api';
import {
  Container,
  Content,
  FooterBG,
  FooterContainer,
  FullContainer,
  HeaderBG,
  HeaderContainer,
} from '@/styles/pages/Home';
import GetDates from '@/utils/GetDates';

interface Show {
  backdrop_path?: string;
  id?: number;
  budget?: number;
  original_language?: string;
  original_title?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string;
  title?: string;
  name?: string;
  imdbRating?: string;
  metascore?: string;
}

interface HomeProps {
  trending: Show[];
  popularMovies: Show[];
  popularSeries: Show[];
  todaysMovies: Show[];
}

const Home: React.FC<HomeProps> = ({
  trending,
  popularMovies,
  popularSeries,
  todaysMovies,
}) => {
  return (
    <FullContainer>
      <HeaderBG>
        <HeaderContainer>
          <div>
            <img id="logo" src="/logo.png" alt="MovieNager" />
            <img id="tmdb" src="/tmdb.png" alt="Powered by Tmdb" />
          </div>

          <div>
            <input
              type="text"
              placeholder="Busque pelo nome do filme, ator/atriz ou gênero"
            />
          </div>

          <div>
            <Link href=".">
              <a>Entrar</a>
            </Link>
            <Link href=".">
              <a>Cadastrar</a>
            </Link>
          </div>
        </HeaderContainer>
      </HeaderBG>

      <Carousel
        className="main-carousel"
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        centerMode
        autoPlay
        interval={2000}
      >
        {trending.map((show) => (
          <div className="main-carousel-div" key={show.id}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${show.backdrop_path}`}
              alt={show.title}
            />
            <div className="carousel-info-div">
              <strong>{show.title || show.name}</strong>
              <i>{show.original_title || show.original_name}</i>
            </div>
          </div>
        ))}
      </Carousel>
      <Container>
        <Content>
          <h3>Filmes populares</h3>
        </Content>
      </Container>
      <MovieRow shows={popularMovies} />
      <Container>
        <Content>
          <h3>Séries populares</h3>
        </Content>
      </Container>
      <MovieRow shows={popularSeries} />
      <Container>
        <Content>
          <h3>Lançamentos de hoje</h3>
        </Content>
      </Container>
      <MovieRow shows={todaysMovies} />
      <FooterBG>
        <FooterContainer>
          <span>
            Made with 💜 by
            <strong> Raul Garcia</strong>
          </span>
          <div>
            <a href="https://github.com/rgarcia-s">
              <FiGithub size={24} color="#7159c1" />
            </a>

            <a href="https://www.linkedin.com/in/raul-garcia-s/">
              <FiLinkedin size={24} color="#7159c1" />
            </a>
          </div>
        </FooterContainer>
      </FooterBG>
    </FullContainer>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const trending = await api.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}&language=pt-BR&page=1`,
  );

  const popularMovies = await api.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
  );

  const popularSeries = await api.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=pt-BR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
  );

  const { formattedDate } = GetDates();

  const todaysMovies = await api.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${formattedDate}&primary_release_date.lte=${formattedDate}`,
  );

  // Remove movies without posters
  const todaysMoviesWithPosters = todaysMovies.data.results.filter(
    (movie) => movie.poster_path !== null,
  );

  return {
    props: {
      trending: trending.data.results,
      popularMovies: popularMovies.data.results,
      popularSeries: popularSeries.data.results,
      todaysMovies: todaysMoviesWithPosters,
    },
    revalidate: 3600,
  };
};
