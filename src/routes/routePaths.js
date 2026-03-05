// src/routes/routePaths.js
export const ROUTES = {
  // Public routes
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_DETAILS: '/movie/:id', // params: id
  EVENTS: '/events',
  EVENT_DETAILS: '/event/:id', // params: id
  SEARCH: '/search', // query: q
  
  // Booking flow (protected)
  SELECT_SHOW: '/movie/:id/select-show', // params: id, query: date
  SELECT_SEATS: '/booking/:showId/select-seats', // params: showId
  CHECKOUT: '/booking/checkout', // state: booking details
  PAYMENT: '/booking/payment', // state: order details
  BOOKING_CONFIRMATION: '/booking/confirmation/:bookingId', // params: bookingId
  
  // User routes (protected)
  USER_PROFILE: '/profile',
  USER_BOOKINGS: '/profile/bookings',
  USER_WISHLIST: '/profile/wishlist',
  
  // Auth routes
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  
  // Static pages
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQ: '/faq',
  PRIVACY_POLICY: '/privacy',
  TERMS: '/terms',
  
  // Admin routes (protected + admin role)
  ADMIN_DASHBOARD: '/admin',
  ADMIN_MOVIES: '/admin/movies',
  ADMIN_THEATRES: '/admin/theatres',
  ADMIN_SHOWS: '/admin/shows',
  ADMIN_BOOKINGS: '/admin/bookings',
  ADMIN_USERS: '/admin/users'
};

// Helper function to generate dynamic routes
export const generatePath = {
  movieDetails: (id) => `/movie/${id}`,
  eventDetails: (id) => `/event/${id}`,
  selectShow: (id) => `/movie/${id}/select-show`,
  selectSeats: (showId) => `/booking/${showId}/select-seats`,
  bookingConfirmation: (bookingId) => `/booking/confirmation/${bookingId}`,
  search: (query) => `/search?q=${encodeURIComponent(query)}`
};