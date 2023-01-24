import React, { useEffect, useState } from 'react';
import App from '../../App';
import Repository from '../../types/Repository';
import RepositoryCard from '../../components/repositorycard';
import { Grid } from '@mui/material';

const Index = () => {

  const [repositories, setRepositories] = useState([] as Repository[]);

  const GITHUB_URL = 'https://api.github.com/users/luan-coelho/repos';

  async function getRepositories() {
    const response = await fetch(GITHUB_URL);
    const data = await response.json();
    console.log(data);

    setRepositories(data);
  }

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <App>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {repositories.map((r) => {
          return (
            <>
              <Grid item xs={2} sm={4} md={4} key={r.id}>
                <RepositoryCard repository={r} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </App>
  );
};

export default Index;
