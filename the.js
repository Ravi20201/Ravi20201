// Sample Express routes

// User registration
app.post('/api/register', UserController.register);

// User login
app.post('/api/login', UserController.login);

// Event creation
app.post('/api/events', authMiddleware, EventController.createEvent);

// Event retrieval
app.get('/api/events', EventController.getAllEvents);

// Ticket booking
app.post('/api/bookings', authMiddleware, BookingController.bookTicket);

// User profile
app.get('/api/profile', authMiddleware, UserController.getUserProfile);
