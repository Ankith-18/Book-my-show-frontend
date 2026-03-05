// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './routePaths';
import ProtectedRoute from './ProtectedRoute';

// Layouts
import MainLayout from '../layouts/MainLayout/MainLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';

// Pages
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import EventsPage from '../pages/EventsPage/EventsPage';
import SelectShowPage from '../pages/SelectShowPage/SelectShowPage';
import SelectSeatsPage from '../pages/SelectSeatsPage/SelectSeatsPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import BookingConfirmationPage from '../pages/BookingConfirmationPage/BookingConfirmationPage';
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes with MainLayout */}
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.MOVIES} element={<MoviesPage />} />
        <Route path={ROUTES.MOVIE_DETAILS} element={<MovieDetailsPage />} />
        <Route path={ROUTES.EVENTS} element={<EventsPage />} />
        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.FAQ} element={<FAQPage />} />
        <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
        <Route path={ROUTES.TERMS} element={<TermsPage />} />
      </Route>

      {/* Auth routes without Navbar/Footer */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
      </Route>

      {/* Protected routes - require authentication */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.SELECT_SHOW} element={<SelectShowPage />} />
          <Route path={ROUTES.SELECT_SEATS} element={<SelectSeatsPage />} />
          <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
          <Route path={ROUTES.PAYMENT} element={<PaymentPage />} />
          <Route path={ROUTES.BOOKING_CONFIRMATION} element={<BookingConfirmationPage />} />
          <Route path={ROUTES.USER_PROFILE} element={<UserProfilePage />} />
          <Route path={ROUTES.USER_BOOKINGS} element={<UserBookingsPage />} />
          <Route path={ROUTES.USER_WISHLIST} element={<UserWishlistPage />} />
        </Route>
      </Route>

      {/* Admin routes - require admin role */}
      <Route element={<ProtectedRoute requiredRole="admin" />}>
        <Route element={<AdminLayout />}>
          <Route path={ROUTES.ADMIN_DASHBOARD} element={<AdminDashboardPage />} />
          <Route path={ROUTES.ADMIN_MOVIES} element={<AdminMoviesPage />} />
          <Route path={ROUTES.ADMIN_THEATRES} element={<AdminTheatresPage />} />
          <Route path={ROUTES.ADMIN_SHOWS} element={<AdminShowsPage />} />
          <Route path={ROUTES.ADMIN_BOOKINGS} element={<AdminBookingsPage />} />
          <Route path={ROUTES.ADMIN_USERS} element={<AdminUsersPage />} />
        </Route>
      </Route>

      {/* 404 - Not Found */}
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
};

export default AppRoutes;