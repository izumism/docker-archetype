import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../Carousel';
import CarouselButton from '../CarouselButton';
import CarouselSlide from '../CarouselSlide';


describe('Carousel', () => {
  let wrapper;

  const slides = [
    {
      imgUrl: 'https://example.com/slide1.png',
      description: 'Slide 1',
      attribution: 'Uno Pizzeria',
    },
    {
      imgUrl: 'https://example.com/slide2.png',
      description: 'Slide 2',
      attribution: 'Dos Equis',
    },
    {
      imgUrl: 'https://example.com/slide3.png',
      description: 'Slide 3',
      attribution: 'Three Amigos',
    },
  ];

  beforeEach(() => {
    wrapper = shallow(<Carousel slides={slides}/>);
  });

  it('renders a <div>', () => {
    const expected = 'div';
    const actual = wrapper.type();
    expect(actual).toBe(expected);
  });

  it('has an initial `slideIndex` of 0', () => {
    const expected = 0;
    const actual = wrapper.state('slideIndex');
    expect(actual).toBe(expected);
  });

  it('renders a CarouselButton labeled "Prev"', () => {
    const actual = wrapper
              .find(CarouselButton)
              .at(0)
              .prop('children');
    const expected = 'Prev';
    expect(actual).toBe(expected);
  });

  it('renders a CarouselButton labeled "Next"', () => {
    const actual = wrapper
                    .find(CarouselButton)
                    .at(1)
                    .prop('children');
    const expected = 'Next';
    expect(actual).toBe(expected);
  });

  describe('with a middle slide selected', () => {
    beforeEach(() => {
      wrapper.setState({ slideIndex: 1 });
    });

    it('decrements `slideIndex` when Prev is clicked', () => {
      wrapper.find('[data-action="prev"]').simulate('click');
      const actual = wrapper.state('slideIndex');
      const expected = 0;
      expect(actual).toBe(expected);
    });
    
    it('increments `slideIndex` when Next is clicked', () => {
      wrapper.find('[data-action="next"]').simulate('click');
      const actual = wrapper.state('slideIndex');
      const expected = 2;
      expect(actual).toBe(expected);
    });
  });

  describe('with the first slide selected', () => {
    it('wraps `slideIndex` to the max value when Prev is clicked', () => {
      wrapper.setState({ slideIndex: 0 });
      wrapper.find('[data-action="prev"]').simulate('click');
      const actual = wrapper.state('slideIndex');
      const expected = slides.length - 1;
      expect(actual).toBe(expected);
    });
  });

  describe('with the last slide selected', () => {
    it('wraps `slideIndex` to the min value when Next is clicked', () => {
      wrapper.setState({ slideIndex: slides.length - 1 });
      wrapper.find('[data-action="next"]').simulate('click');
      const actual = wrapper.state('slideIndex');
      const expected = 0;
      expect(actual).toBe(expected);
    });
  });

  it('renders the current slide as a CarouselSlide', () => {
    let slideProps;
    slideProps = wrapper.find(CarouselSlide).props();
    expect(slideProps).toEqual(slides[0]);
    wrapper.setState({ slideIndex: 1 });
    slideProps = wrapper.find(CarouselSlide).props();
    expect(slideProps).toEqual(slides[1]);
  });
});

