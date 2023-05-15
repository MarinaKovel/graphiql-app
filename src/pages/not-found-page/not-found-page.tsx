import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CustomBtn } from '@/components/custom-btn';
import './not-found-page.scss';
import { RoutePath } from '@/utils/enum';

export const NotFound: FC = () => {
  return (
    <section className="error-page">
      <img
        className="error-page__img"
        src="https://classic.yarnpkg.com/assets/feature-speed.png"
        alt="error_img"
      />
      <h2 className="error-page__title"> 404 Error </h2>
      <h3>Page not found</h3>
      <p className="error-page__text"> Sorry, this page isn`t available </p>

      <CustomBtn btnType="button">
        <Link to={RoutePath.NOT_FOUND}>Back to home</Link>
      </CustomBtn>
    </section>
  );
};
