import React from 'react';
import Repository from '../../types/Repository';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';

type Props = {
  repository: Repository
}
const RepositoryCard = ({ repository }: Props) => {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 450 }} variant='outlined'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {repository.name}
        </Typography>
        <Typography variant='h5' component='div'>
        </Typography>
        <Typography variant='body2'>
          {repository.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={repository.html_url} target="_blank">
          <Button size='small'>veja mais</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default RepositoryCard;
