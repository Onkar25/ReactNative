Features to Implement:

1. Authentication (Bonus - Optional)
- [ ] Implement user authentication using Firebase Authentication or OAuth (Google/Facebook).
- [ ] Users can sign up, log in, and log out.

2. Task Management
- [x] Create, Edit, Delete tasks.
- [ ] Each task should have a title, description, due date, priority (high, medium, low), and status (pending/completed).
- [ ] Implement local storage for tasks using AsyncStorage or SQLite.
- [ ] API Integration: Fetch tasks from a remote server or mock API and sync tasks locally.

3. Advanced Navigation
- [ ] Use React Navigation with nested navigators:
- [ ] Drawer Navigator with a Tab Navigator inside it.
- [ ] Screens: Home (Task List), Add Task, Edit Task, Task Details, Completed Tasks.
- [ ] Use custom header for each screen and drawer icon.
- [ ] Use deep linking to open the app from a specific task link.

4. Task Filtering & Sorting
- [ ] Add filters to display tasks by date (today, this week, overdue).
- [ ] Sort tasks by priority and due date.
- [ ] Implement a search bar to filter tasks by title.

5. State Management (Bonus - Optional)
- [ ] Use Redux or Context API to manage the global state of tasks.
- [ ] Use Redux Thunk or Redux Saga for async actions (e.g., fetching tasks from an API).

6. Animations
- [ ] Implement task list animations:
- [ ] Use React Native Animations or React Native Reanimated for swipe-to-delete and task completion animations.
- [ ] Animate task list item on adding/removing tasks.

7. Performance Optimization
- [ ] Use FlatList or SectionList for rendering tasks efficiently.
- [ ] Implement memoization for optimizing rendering.
- [ ] Use useCallback, useMemo, and React.memo to prevent unnecessary re-renders.

8. Dark Mode & UI Customization
- [ ] Implement dark mode using react-native-paper or a custom theme provider.
- [ ] Customize the app’s UI to be user-friendly and responsive using Flexbox and Dimensions.

9. Push Notifications (Bonus - Optional)
- [ ] Implement push notifications using Firebase Cloud Messaging or OneSignal to notify users of task reminders.

10. Testing
- [ ] Write unit tests using Jest for components like task list, task creation, and task filters.
- [ ] Write integration tests for navigation and API calls.

⸻

Deliverables:
- [ ]   Source Code: A GitHub repository or Zip file with the complete source code.
- [ ]   App Screenshots: Provide screenshots or a demo of the app running on Android and iOS simulators/emulators.
- [ ]   README: A README file explaining how to set up, run the app, and any external dependencies (e.g., Firebase setup, API URL).
- [ ]   Video Demo (Optional): A 2-3 minute video showcasing the app’s features.

⸻

Bonus Features (Optional):
- [ ] Voice Assistant: Integrate with Google Assistant or Siri Shortcuts to create and complete tasks via voice.
- [ ] Calendar Integration: Sync task due dates with a calendar app like Google Calendar.
- [ ] Task Sharing: Allow users to share tasks with others via SMS, Email, or social media.
- [ ] Task Prioritization: Let users drag and drop tasks to reorder by priority.

⸻

Tools & Libraries to Consider:
- [ ] React Navigation: For handling routing and navigation.
- [ ] Redux/Context API: For global state management.
- [ ] React Native Paper: For UI components and dark mode support.
- [ ] Axios/Fetch: For making API requests.
- [ ] React Native Reanimated: For advanced animations.
- [ ] Day.js or Moment.js: For date formatting and manipulation.
- [ ] Jest: For unit testing.
- [ ] Firebase/Firestore: For authentication and task storage (if using Firebase).

⸻

Guidelines for the Assignment:
- [ ] Code Quality: Follow clean coding practices, proper file structuring, and naming conventions.
- [ ] Responsive Design: Ensure the app is responsive on different screen sizes.
- [ ] Documentation: Provide comments and clear explanations where necessary.
- [ ] Error Handling: Implement proper error handling for network requests and user inputs.
- [ ] Testing: Ensure the app is robust by writing tests for critical components and workflows.

⸻

Evaluation Criteria:
- [ ] Functionality: Does the app meet the outlined requirements?
- [ ] Code Quality: Is the code clean, well-structured, and maintainable?
- [ ] UI/UX: Is the user interface intuitive, responsive, and visually appealing?
- [ ] Performance: Is the app performant with smooth animations and transitions?
- [ ] Testing: Does the app have sufficient test coverage?
