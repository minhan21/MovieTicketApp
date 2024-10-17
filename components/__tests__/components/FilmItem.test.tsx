import FilmItem from '@/components/FilmItem';
import { renderWithRedux, waitForComponentToPaint } from '@/utils/testUtils';
import React from 'react';


jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: jest.fn(),
    }),
}));

describe('FilmItem', () => {
    const mockFilm = {
        id: '1',
        title: 'Test Film',
        description: 'A test description',
        imageUrl: 'https://example.com/image.jpg',
    };

    it('renders correctly', async () => {
        const wrapper = renderWithRedux(<FilmItem film={mockFilm} />);
        await waitForComponentToPaint(wrapper);

        expect(wrapper.root.findByProps({ testID: 'film-title' }).props.children).toBe('Test Film');
        expect(wrapper.root.findByProps({ testID: 'film-description' }).props.children).toBe('A test description');
    });

    it('handles favorite button press', async () => {
        const wrapper = renderWithRedux(<FilmItem film={mockFilm} />);
        await waitForComponentToPaint(wrapper);

        const favoriteButton = wrapper.root.findByProps({ testID: 'favorite-button' });
        favoriteButton.props.onPress();

        // You would typically check the Redux store state here to verify the favorite was added
    });

    // Add more tests as needed
});