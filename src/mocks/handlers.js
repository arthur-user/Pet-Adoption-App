import { rest } from 'msw';
import { pets } from './pets'; 

export const handlers = [
  rest.get('/types', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(['Dog', 'Cat', 'Bird', 'Other']));
  }),
  rest.get('/animals', (req, res, ctx) => {
    const type = req.url.searchParams.get('type');
    const query = req.url.searchParams.get('query');
    let response = pets;

    if (type) {
      response = response.filter(
        (pet) => pet.type.toLowerCase() === type.toLowerCase()
      );
    }
    if (query) {
      response = response.filter(
        (pet) =>
          pet.name.toLowerCase().includes(query.toLowerCase()) ||
          pet.location.toLowerCase().includes(query.toLowerCase()) ||
          pet.breed.toLowerCase().includes(query.toLowerCase()) ||
          pet.type.toLowerCase().includes(query.toLowerCase()),
      );
    }
    return res(ctx.status(200), ctx.json(response));
  }),
  rest.get('/animals/:id', (req, res, ctx) => {
    const { id } = req.params;
    const pet = pets.find((p) => p.id === Number(id));

    if (!pet) return res(ctx.status(404));

    return res(ctx.status(200), ctx.json(pet));
  }),
];