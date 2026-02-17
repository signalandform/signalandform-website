-- Seed popular cancellation guides
insert into public.cancellation_guides (service_name, instructions, url, difficulty) values
('Netflix', '1. Go to Netflix.com and sign in\n2. Click your profile icon → Account\n3. Under Membership & Billing, click Cancel membership\n4. Confirm cancellation', 'https://www.netflix.com/account', 'easy'),
('Spotify', '1. Go to account.spotify.com\n2. Under Subscription, click Cancel\n3. Follow the steps to cancel', 'https://www.spotify.com/account/overview/', 'easy'),
('Amazon Prime', '1. Go to Amazon.com → Account & Lists → Prime Membership\n2. Click End Membership\n3. Confirm cancellation', 'https://www.amazon.com/prime', 'easy'),
('Disney+', '1. Go to disneyplus.com and sign in\n2. Click Profile → Account\n3. Under Subscription, click Cancel\n4. Confirm', 'https://www.disneyplus.com/account', 'easy'),
('Hulu', '1. Go to hulu.com/account\n2. Under Your Subscription, click Cancel\n3. Confirm cancellation', 'https://www.hulu.com/account', 'easy'),
('Apple TV+', '1. On iPhone: Settings → [your name] → Subscriptions\n2. Select Apple TV+ → Cancel Subscription\n3. Or on Mac: System Settings → [your name] → Media & Purchases → Manage', 'https://support.apple.com/en-us/HT202039', 'easy'),
('HBO Max', '1. Go to max.com/account\n2. Under Subscription, click Manage Subscription\n3. Cancel subscription', 'https://www.max.com/account', 'easy'),
('YouTube Premium', '1. Go to youtube.com → Settings → Membership\n2. Click Manage membership\n3. Cancel membership', 'https://www.youtube.com/paid_memberships', 'easy'),
('Adobe Creative Cloud', '1. Go to account.adobe.com\n2. Under Plans & Products, click Manage plan\n3. Cancel your plan', 'https://account.adobe.com/plans', 'medium'),
('Microsoft 365', '1. Go to account.microsoft.com/services\n2. Find Microsoft 365 and click Manage\n3. Cancel subscription', 'https://account.microsoft.com/services', 'medium'),
('Dropbox', '1. Go to dropbox.com/account\n2. Under Plan, click Cancel plan\n3. Confirm', 'https://www.dropbox.com/account/plan', 'easy'),
('iCloud', '1. On iPhone: Settings → [your name] → iCloud → Manage Storage → Change Storage Plan\n2. Downgrade to free tier', 'https://support.apple.com/en-us/HT201318', 'medium'),
('Planet Fitness', '1. Visit your home club in person with ID\n2. Fill out cancellation form\n3. Some locations allow mail-in cancellation – check your contract', 'https://www.planetfitness.com', 'hard'),
('LA Fitness', '1. Visit club in person or send certified mail\n2. Cancellation form required\n3. May require 30 days notice', 'https://www.lafitness.com', 'hard'),
('Local Gym', 'Cancel in person at your gym. Bring ID and account info. Some require written notice 30 days in advance.', null, 'medium')
on conflict (service_name) do nothing;
