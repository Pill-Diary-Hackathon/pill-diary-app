import { Notifications } from 'expo';

const takeMedsActions = [
  {
    actionId: 'took',
    buttonTitle: 'Took Them All!',
    isDestructive: false,
    isAuthenticationRequired: false,
    screen: 'Links',
  },
  {
    actionId: 'snooze',
    buttonTitle: 'Snooze',
    isDestructive: false,
    isAuthenticationRequired: false,
    screen: 'Links',
  },
  {
    actionId: 'view',
    buttonTitle: 'View/Edit',
    isDestructive: false,
    isAuthenticationRequired: false,
    screen: 'Links',
  },
];

export const setupNotificationResponses = async navigate => {
  Notifications.addListener(notification => {
    const action = takeMedsActions.find(
      el => el.actionId === notification.actionId
    );
    if (action) {
      navigate(action.screen);
    }
  });

  await Notifications.createCategoryAsync('ps1', takeMedsActions);
};

export const notificationTest = async () => {
  const localNotification = {
    title: 'Good afternoon!',
    body:
      "It's time to take your medications:\nTemozolomide (2 pills)\nRegorafanib (1 pill)",
    categoryId: 'ps1',
    android: { sticky: false },
    data: {},
  };

  const schedulingOptions = { time: new Date().getTime() + 2000 };
  const notification = await Notifications.scheduleLocalNotificationAsync(
    localNotification,
    schedulingOptions
  );
};
