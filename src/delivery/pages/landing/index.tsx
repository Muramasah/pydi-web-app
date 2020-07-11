import { Grid } from '@material-ui/core';
import * as React from 'react';
import { FC } from 'react';

import { ArticlePreview } from '../../components/Article/Preview/Item';
import { ArticlePreviewList } from '../../components/Article/Preview/List';
import { Header } from '../../components/Header';

const tabButtonItems = [{ label: 'Last Activity' }, { label: 'About Me' }];

const mainArticle = {
  id: 'theId01',
  title: 'Super Article',
  abstract: 'Super Abstract',
  content: 'Super content',
  date: 'Jan 13, 2004',
  sources: ['https://source.unsplash.com/random'],
};

const articles = [
  {
    id: 'theId02',
    title: 'Title 02',
    abstract: 'Abstract 02',
    content: 'Content 02',
    date: 'Jan 15, 2004',
    sources: ['https://source.unsplash.com/random'],
  },
  {
    id: 'theId03',
    title: 'Title 03',
    abstract: 'Abstract 03',
    content: 'Content 03',
    date: 'Mar 17, 2014',
    sources: ['https://source.unsplash.com/random'],
  },
  {
    id: 'theId04',
    title: 'Title 04',
    abstract: 'Abstract 04',
    content: 'Content 04',
    date: 'Dic 13, 2019',
    sources: ['https://source.unsplash.com/random'],
  },
];

export const LandingPage: FC = () => {
  return (
    <>
      <Header title='FeliDev' tabButtons={tabButtonItems} />
      <Grid container>
        <Grid item xs={12}>
          <title>Last Article</title>
          <ArticlePreview fullWidth article={mainArticle} />
        </Grid>
        <Grid item xs={12}>
          <title>You may enjoy</title>
          <ArticlePreviewList articles={articles} />
        </Grid>
      </Grid>
    </>
  );
};
