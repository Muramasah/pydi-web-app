import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { CreateArticleAction } from '../../../../../../../actions/CreateArticle';
import { FetchService } from '../../../../../../../core/contracts/FetchService';
import { CreateArticlePage } from '../view/react/CreateArticlePage';
import { useCreateArticlePresenter } from '../view/react/hooks/useCreateArticlePresenter';

describe('Given a CreatePage', () => {
  const fetchService = ({
    post: jest.fn().mockResolvedValue(undefined),
  } as unknown) as FetchService;

  const createArticleAction = new CreateArticleAction(fetchService);

  const createPage = (
    <CreateArticlePage model={createArticleAction} actions={useCreateArticlePresenter} />
  );

  afterEach(() => cleanup());

  test('when rendered, then should have a input for the title', async () => {
    act(() => {
      render(createPage);
    });
    await waitFor(() => expect(screen.getByLabelText(/title/i)).toBeTruthy());
  });

  test('when rendered, then should have a input for the abstract', async () => {
    act(() => {
      render(createPage);
    });
    await waitFor(() => expect(screen.getByLabelText(/abstract/i)).toBeTruthy());
  });

  test('when rendered, then should have a input for the content', async () => {
    act(() => {
      render(createPage);
    });
    await waitFor(() => expect(screen.getByLabelText(/content/i)).toBeTruthy());
  });

  test('when rendered, then should have a input for the date', async () => {
    act(() => {
      render(createPage);
    });
    await waitFor(() => expect(screen.getByLabelText(/date/i)).toBeTruthy());
  });

  test('when rendered, then should have a create button', async () => {
    act(() => {
      render(createPage);
    });
    await waitFor(() => expect(screen.getByText(/Create/)).toBeTruthy());
  });
});
