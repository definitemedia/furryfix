import { publicAsset } from "@/lib/brand-assets";
import type { BlogCardModel } from "@/components/blog/types";

/** Shown on every article as "Last updated". Not a publication date. */
export const blogLastUpdated = "2026-09-12";
export const blogLastUpdatedLabel = "12 September 2026";

export const blogFilters = [
  "All",
  "Pet Care",
  "Grooming & Bath Time",
  "Pet Lifestyle",
  "Puppy Care",
  "Care & Wellness",
] as const;

export const blogEmptyMessage = "More stories are on the way.";

export const journalHero = {
  label: "The FurryFix Journal",
  title: "Simple Care. Happier Pets.",
  lede: "Helpful tips, everyday grooming ideas, and a little extra love for life with your furry friend.",
  images: [
    {
      file: "lifestyle/playing-with-owner.jpg",
      alt: "A woman leaning down to play with her excited corgi on a sunny park lawn",
      imageClass: "object-[50%_55%]",
    },
    {
      file: "why-furryfix/hero-owner-smile.jpg",
      alt: "A smiling woman hugging her happy dog outdoors in a sunny, tree-lined park",
      imageClass: "object-[62%_40%]",
    },
    {
      file: "lifestyle/loving-hug.jpg",
      alt: "A man warmly hugging his smiling golden retriever outdoors",
      imageClass: "object-[50%_40%]",
    },
  ],
} as const;

type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

type BlogFamily = "bath" | "care";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Chip filters besides All. Card badges use `category`, which can differ. */
  filters: readonly string[];
  family: BlogFamily;
  image: string;
  imageAlt: string;
  imageClass: string;
  featured?: boolean;
  featuredBlurb?: string;
  intro: string;
  body: readonly ContentBlock[];
  takeaways: readonly string[];
};

function parseBody(source: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let list: string[] | null = null;

  const flush = () => {
    if (list) {
      blocks.push({ type: "list", items: list });
      list = null;
    }
  };

  for (const raw of source.split("\n")) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    if (line.startsWith("- ")) {
      list ??= [];
      list.push(line.slice(2).trim());
      continue;
    }
    flush();
    if (line.startsWith("## ")) {
      blocks.push({ type: "heading", text: line.slice(3).trim() });
    } else {
      blocks.push({ type: "paragraph", text: line });
    }
  }

  flush();
  return blocks;
}

function blockText(block: ContentBlock): string {
  if (block.type === "list") return block.items.join(" ");
  return block.text;
}

function articleWordCount(post: BlogPost): number {
  const text = [post.intro, ...post.body.map(blockText), ...post.takeaways].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(post: BlogPost): number {
  return Math.max(1, Math.round(articleWordCount(post) / 200));
}

const posts: readonly BlogPost[] = [
  {
    slug: "stress-free-bath-time-for-dogs",
    title: "The Ultimate Guide to a Stress-Free Bath Time for Your Dog",
    excerpt: "Simple ways to make bath time calmer, gentler, and more enjoyable for your furry friend.",
    category: "Grooming & Care",
    filters: ["Grooming & Bath Time"],
    family: "bath",
    image: "lifestyle/bath-time.jpg",
    imageAlt: "A happy golden retriever with a freshly washed coat, gently cared for at bath time",
    imageClass: "object-[60%_35%]",
    featured: true,
    featuredBlurb:
      "Bath time can become a happy part of your dog's routine. Discover simple ways to make every bath calmer, gentler, and more enjoyable.",
    intro:
      "Bath time can feel like a big event, especially if your dog would rather be anywhere else. It does not have to stay that way. A calm setup, a gentle pace, and a routine your dog can recognise will do more than a rush to get it over with. These are simple ways to make each bath calmer, gentler, and more enjoyable for both of you.",
    body: parseBody(`
## Set the room up before the water goes on
The easiest baths start while your dog is still dry. Lay a towel where you can reach it without turning away. Set out a brush or comb, a soft cloth for the face, and a shampoo made for dogs. FurryFix Shed Control 2-in-1 Conditioning Shampoo is the shampoo in the FurryFix range, so it is the bottle to keep with your bath things. Place it where one hand can find it.

Choose a warm, quiet spot. A bathroom with the door closed gives you a smaller world, which many dogs find easier than an open hallway full of places to run. If the sound of the tap makes your dog tense, let a little water run before you invite them in, so the noise is already part of the background when they arrive.

A non-slip mat is a small thing that changes the feeling under their paws. Slipping is startling. Steady footing lets your dog pay attention to you instead of bracing for a skid. If you do not have a mat, a towel you can spare on the floor of the tub is a start.

## Invite them in, then go slowly
Let your dog sniff the tub, the towel, and your hands. That pause is part of the bath, not a delay in front of it. Use the same easy voice you use on the sofa. Praise a paw on the mat, then two paws, then standing still. If they already hop in happily, you can move forward. If they hesitate, those small steps are the real work for today.

Wet the coat in stages: a paw, a leg, the chest, then the back. Many dogs settle once they feel that the water is on their fur and not pouring toward their eyes. Keep one hand in contact so they always know where you are. A dog who can predict the next touch usually stays softer in the body. If they shake, pause and begin again without a scolding.

## Keep the water comfortable
Check the water on the inside of your wrist before it touches your dog. It should feel lukewarm, never hot and never chilly. A stream that feels fine on your hands can still feel sharp on a belly with less fur, so start there with a gentler flow. Support a small dog so they feel held rather than perched. A larger dog often does best with you beside them, working along one side at a time.

Work the water through the coat down toward the skin, especially if the fur is thick. The top can look soaked while the undercoat is still dry. Slow circles with your fingers tell you more than a glance. If your dog leans into the massage, stay with that rhythm. If they stiffen, lighten your hand and give them a breath.

## Lather gently, then rinse until the coat feels clean
Massage shampoo with your fingertips, following the way the coat grows. Paws, the belly, and the feathering on the legs pick up a lot of the day, so give them unhurried attention. Stay clear of the eyes. A damp cloth is usually kinder on the face than a stream of water. Fold the cloth so you can wipe around the muzzle without dripping down the nose.

Rinse until the coat no longer feels slippery. Leftover lather can leave fur tacky, and it may bother the skin later when it dries. Slide your hands through the coat as you rinse so you can feel the change from slick to simply wet. Ears need care too: you can wipe the outer ear with a cloth, and you can keep a full pour of water out of the ear canal. If you notice redness, bumps, or anything unusual or concerning, consult your veterinarian.

## Drying is part of the bath
Press water out of the coat with your hands before you reach for the towel. Then wrap your dog and pause. Some dogs love a lively rub and will wag through the whole thing. Others want a quiet hold and a chance to shake once. Follow their mood. Keep them warm until they are mostly dry, especially in a cool room or if their coat is short and they chill quickly.

When the fur is damp rather than dripping, a gentle brush can ease tangles before they tighten. Work a small section, then another. Stop if your dog asks for a break by turning away or mouthing the brush. A short, kind finish teaches them that bath time has an ending they can trust.

## Leave them with a good memory
Offer a familiar toy, a cuddle, or a few quiet minutes together once they are comfortable. You do not need a performance. Dogs remember how a bath finishes more clearly than they remember the middle. If the last moment is soft, the next beginning is easier to offer.

With a little patience and plenty of love, bath time can become one more happy moment you share together.
    `),
    takeaways: [
      "Set out the towel, mat, and dog shampoo before you invite your dog in.",
      "Wet, lather, and rinse at a pace your dog can follow, and keep water away from the eyes.",
      "Rinse until the coat no longer feels slippery, then dry and brush only as long as they stay comfortable.",
      "End with a calm, familiar moment so the next bath begins more easily.",
    ],
  },
  {
    slug: "how-often-should-you-bathe-your-dog",
    title: "How Often Should You Bathe Your Dog?",
    excerpt:
      "Bathing needs can vary from one dog to another. Learn what factors can influence your dog's grooming routine.",
    category: "Grooming & Care",
    filters: ["Grooming & Bath Time"],
    family: "bath",
    image: "about/vision-outdoors.jpg",
    imageAlt: "A happy golden retriever standing up on a waterfront railing beside its owner, who pats its back",
    imageClass: "object-[58%_50%]",
    intro:
      "There is no single bath calendar that fits every dog. A muddy adventure, a dusty walk, a dog who lives mostly on the sofa, and a dog who swims will not share the same rhythm. Instead of hunting for a universal rule, it helps to notice the life your dog actually leads and how their coat and skin seem between washes.",
    body: parseBody(`
## Start with the dog in front of you
Coat type is one of the first things people notice, and it does shape a bath. A short, smooth coat may shed dirt more easily between washes. A double coat or long feathering can hold dust, pollen, and the odd burr. That does not mean one kind of dog should be bathed on a fixed schedule and another should wait a set number of weeks. It means the same afternoon in the park can leave two dogs in very different states.

Lifestyle matters just as much. A dog who hikes, rolls, or plays in wet grass may need a rinse sooner than a companion who spends quiet days indoors. Indoor life is not automatically "cleaner," though. Dander, sofa dust, and a habit of sleeping in one spot can still leave a coat that feels dull. Watch the dog, not a chart.

## What you can notice between baths
Smell is an honest clue, used gently. A light doggy scent after a walk is ordinary. A coat that stays strongly odorous after it is dry, or skin that looks irritated, is a reason to look more closely rather than to scrub harder. Run your hands over the body when you greet your dog. You will feel grit, oil, or tangles long before they become a project.

Part the fur in a few places and look at the skin you can see. Healthy interest is enough. You are not diagnosing anything. You are learning what is usual for this dog so a change stands out later. If you notice anything unusual or concerning, consult your veterinarian.

Activity changes the picture too. Swimming in a lake, a day at the beach, or a roll in something you would rather not name can call for a bath that week even if the last one was recent. A quiet stretch at home may mean you brush and leave the shampoo in the cupboard. Frequency follows events and comfort, not a number on the wall.

## Skin comfort comes before a habit of washing
Bathing can be refreshing. It can also be more than a particular dog enjoys if it happens every time they come inside. Some coats rely on their own oils to feel comfortable. Washing very often, just because the calendar says so, is not a kindness by itself. Spacing baths so the skin has time to feel settled is part of good care.

Weather plays a role without writing the rules. A humid week can leave a coat feeling different from a dry, cold one. Snow, salt on pavements, and pollen season each leave their own trace. You might bathe a little sooner after those exposures and then return to a quieter rhythm. The point is to respond, not to lock in a year-round timetable.

Puppies, seniors, and dogs who are new to your home may also need a different pace. A first bath is a lesson in trust, which is a separate kind of planning. An older dog who tires easily may do better with a shorter wash and a warm towel than with a long session. Age is a factor. It is not a formula.

## Building a rhythm you can actually keep
A useful rhythm is one you can describe in plain language. "We bathe after messy outdoor days, and we brush on ordinary ones." "We wash when the coat feels gritty or the smell lingers, and we leave it when a brush is enough." Those sentences leave room for real life. They also keep you from bathing out of guilt because a blog once implied that every dog is on the same clock.

Keep notes in your head for a few weeks. Which days did your dog come home truly dirty? How did the skin look the day after a bath? Did they seem itchy, or simply pleased to be dry and near you? Patterns show up when you pay attention. They rarely show up when you copy someone else's routine.

Professional groomers see a wide range of coats and can talk through what they notice on your dog. That conversation is guidance, not a verdict you must follow forever. Your home, your climate, and your dog's habits still belong in the decision.

When in doubt about your dog's individual grooming needs, your veterinarian or professional groomer can help guide you.

## Between baths, the small care still counts
Brushing, wiping paws, and a damp cloth on a dusty coat can stretch the time between full baths without neglecting your dog. A quick paw wipe after a walk keeps floors kinder and lets you spot a crack or a bit of debris. None of this replaces a bath when a bath is genuinely needed. It simply means "not today" can still be thoughtful care.

If you do bathe, use a shampoo made for dogs and rinse until the coat feels clean rather than slick. Leave your dog warm and unrushed afterward. The best frequency is the one that keeps this particular dog comfortable, and that answer is allowed to change with the season, the walks you take, and the way their skin looks this month.
    `),
    takeaways: [
      "Bathing needs vary with coat, lifestyle, weather, and what your dog got into that day.",
      "There is no single schedule that suits every dog.",
      "Notice smell, grit, and skin comfort, and ask a veterinarian if something seems unusual.",
      "A groomer or veterinarian can help you judge your own dog's rhythm.",
    ],
  },
  {
    slug: "make-grooming-a-happy-experience",
    title: "7 Simple Ways to Make Grooming a Happy Experience",
    excerpt:
      "Turn grooming into a comfortable routine with patience, consistency, and plenty of positive reinforcement.",
    category: "Pet Care",
    filters: ["Pet Care"],
    family: "care",
    image: "about/care-brushing.jpg",
    imageAlt: "A man gently combing the fluffy white coat of a small Pomeranian-type dog",
    imageClass: "object-[58%_40%]",
    intro:
      "Grooming goes more smoothly when a dog expects kindness at the other end of the brush. You do not need a perfect technique or a long session. You need a few habits your dog can trust: short time, a familiar place, a soft voice, and a finish that feels good. These seven ways are small on purpose.",
    body: parseBody(`
## 1. Keep the session shorter than your ambition
A two-minute brush that ends while your dog is still relaxed teaches more than a twenty-minute session that ends in a struggle. Start with a paw, a shoulder, or the easy part of the back. Stop before either of you is tired of it. You can always come back later in the day. Frequency of happy minutes beats one heroic grooming hour.

If your dog has tangles, work a tiny area and leave the rest. Mats that are tight against the skin are uncomfortable, and forcing a comb through them can make the next session harder. A professional groomer can help with a coat that has gotten away from you. Your job at home can stay gentle.

## 2. Use the same place and a similar time
Dogs relax when the picture stays familiar. A mat in the living room, the same low stool, or the same patch of floor after a walk gives grooming a home. Pair it with a time of day when your dog is already a little sleepy, not the moment they are waiting at the door for a game. Consistency is not strictness. It is a promise that this activity has a shape.

Put the brush where you can see it. If grooming tools live in a cupboard you dread opening, the routine will slip. A small basket in the room where you actually sit with your dog is enough of a system.

## 3. Praise the try, not only the finished coat
Positive reinforcement is simply noticing the moment your dog cooperates and marking it. A quiet "yes," a scratch in a favourite spot, or a tiny treat they already love can be plenty. You do not need a performance or a pouch full of new snacks. Deliver the good thing while they are still doing the calm behaviour, not after they have already bounced away.

Skip the scolding. A dog who is corrected for moving often moves more. Guide them back, lower your voice, and try a smaller step. Patience is the reinforcement you are practising too.

## 4. Let them meet the tools first
Hold the brush where your dog can sniff it. Touch it lightly to a shoulder and take it away. Do this on a day when you are not trying to finish a full groom. Brushes, combs, and even the sound of a bottle can be strange objects until they are boring. Boring is a compliment. It means your dog has decided the tool is not a threat.

If they flinch, you have useful information. Go back to a touch they accept, praise that, and end. The investigation itself counts as grooming practice.

## 5. Offer a break before they have to demand one
Watch the body, not the clock. A dog who licks their lips, turns their head away, yawns, or will not put weight on the paw you are holding is asking for space. Pause. Let them shake, sniff, or sit in your lap if that is their habit. Then ask for one more easy stroke, or stop for the day. Breaks keep trust intact.

You can build the length later. A dog who learns that "pause" is a real word will offer you more stillness next time because stillness is no longer a trap.

## 6. End while it is still going well
The last thirty seconds shape the memory. Finish on a spot your dog enjoys, say you are done in the same phrase every time, and then do something ordinary together: a sip of water, a toy, the sofa. Do not tack on "just one more tangle" after you have already said the session is over. Ending honestly is how the routine stays safe.

If the session went poorly, end anyway. A short, slightly messy stop is kinder than pushing through frustration. Tomorrow is a real option.

## 7. Let your own mood set the weather
Dogs are gifted readers of shoulders and breath. If you are rushed, they will feel the hurry in your hands. If you can spare a slower exhale and a looser grip, the brush often goes through more easily. You do not have to feel cheerful on command. You only have to be willing to make the session smaller when you are not in a patient place.

Grooming is a conversation. Some days your dog leads you to stop. Some days you lead them to try one more minute. Either way, the goal is a coat that is cared for and a dog who is willing to come back to the mat.

Put these seven ways together and the routine starts to feel ordinary, which is exactly what you want. Ordinary care, offered with patience and consistency, is how grooming becomes something your dog can enjoy rather than endure.
    `),
    takeaways: [
      "Short, repeatable sessions build more comfort than one long grooming marathon.",
      "Praise calm cooperation, and let your dog sniff tools before they are used in earnest.",
      "Pause when their body asks for space, and stop while the moment is still good.",
      "Your pace and voice are part of the routine your dog learns.",
    ],
  },
  {
    slug: "common-dog-bath-mistakes",
    title: "Dog Bath Time: Common Mistakes Pet Parents Should Avoid",
    excerpt: "Avoid common bath-time mistakes and create a more comfortable grooming experience for your dog.",
    category: "Grooming & Bath Time",
    filters: ["Grooming & Bath Time"],
    family: "bath",
    image: "about/mission-bath.jpg",
    imageAlt: "A pet parent gently rinsing a tan dog in the bathtub at home",
    imageClass: "object-[60%_45%]",
    intro:
      "Most bath-time trouble is not a mystery. It comes from a few habits that make a dog feel unsteady, too cold, or unsure of what your hands are about to do. You can skip those habits without turning bath day into a project. A more comfortable bath is usually a simpler one.",
    body: parseBody(`
## Water that is too hot, too cold, or aimed at the face
The most common miss is water that feels fine to you and harsh to your dog. Test it on your wrist. Lukewarm is the goal. A sudden blast, especially toward the face, teaches a dog that the bath is something to dodge. Wet the body first. Save the head for a damp cloth, and keep a steady hand over the eyes if any water is nearby.

Ears deserve the same care. Wiping the visible outer ear is different from pouring water down the canal. If your dog shakes their head a lot after baths, or if you notice anything unusual or concerning, consult your veterinarian. Do not poke, flush, or treat the ear yourself because a bath seemed like the moment to try.

## A tub they cannot trust
A slippery surface makes even a willing dog brace and scramble. That scramble looks like "they hate baths" when they may simply hate falling. Use a mat, or a towel that will not slide away the first time they shift their weight. Support small dogs so their feet can find the bottom. Give larger dogs room to stand square.

Another version of the same mistake is leaving the door open and hoping they stay. A dog who can bolt will often try, and then the bath becomes a chase. Close the door, set the towel close, and keep your body between your dog and the exit until they are ready. Calm containment is kinder than a grab.

## Shampoo that was never meant for a dog
A shampoo made for people is a different formula, chosen for a different kind of skin and hair. Reaching for it because it is already in the shower is an easy mistake, and it is worth avoiding. Choose a shampoo made for dogs, and use a modest amount. More lather is not more clean. It is more to rinse.

In the FurryFix range, the shampoo for bath time is FurryFix Shed Control 2-in-1 Conditioning Shampoo. Keep that bottle for your dog, and leave other household products on their own shelf. Rinse until your hands no longer feel a slippery film in the coat. Stopping while the fur still feels soapy is one of the mistakes dogs wear for the rest of the day.

## Rushing a dog who is already worried
Speed feels efficient. To a nervous dog it feels like pressure. If they are panting, freezing, or trying to climb your arm, the helpful move is to shrink the bath, not to finish faster. Wet what you can, rinse gently, and end. You can bathe the other side another day. A half bath that stays kind beats a full bath they dread next month.

Talking louder, holding tighter, and promising it will be over soon are all versions of the same rush. Lower your voice. Loosen the grip enough that they are guided, not trapped. Let them shake if they need to, then continue or stop based on how they look afterward.

## Skipping the aftercare
A soaked dog left in a cool hallway will not file the bath under "pleasant." Towel them, keep them warm, and give them a few minutes before the next exciting thing. Brushing a dripping coat can pull and splatter. Wait until the fur is damp. Forgetting this wind-down is a quiet mistake, and it is easy to repair.

It is also a mistake to bathe only because you feel you should, without looking at the dog. Some days a brush and a paw wipe are the whole routine. Bathing on autopilot, especially very often, can leave skin feeling less comfortable. Let the coat, the day's mess, and your dog's ease tell you whether shampoo belongs in the plan.

## Small habits that prevent the big struggle
Gather everything before you start so you are not stepping away mid-rinse. Keep nails smooth enough that a scrabble does not scratch you into a flinch. If nail care worries you, a groomer can show you a calm method. And if a bath has gone badly before, do not replay it at full length to "get them used to it." Replay the easy pieces: the room, the mat, the praise, a splash on a paw.

Avoiding these mistakes is less about perfection and more about comfort. A dog who can stand, see, hear your voice, and trust that the water will stay out of their eyes will give you more cooperation than any faster technique.
    `),
    takeaways: [
      "Use lukewarm water, a steady surface, and a cloth for the face instead of a blast toward the eyes.",
      "Choose a dog shampoo and rinse until the coat no longer feels slick.",
      "Shorten the bath if your dog is worried, rather than rushing to the end.",
      "Towel, warmth, and a calm finish are part of the bath, not an extra.",
    ],
  },
  {
    slug: "everyday-dog-grooming-routine",
    title: "A Simple Everyday Grooming Routine for Your Dog",
    excerpt: "A few simple grooming habits can become an easy and rewarding part of everyday pet care.",
    category: "Everyday Care",
    filters: ["Pet Care"],
    family: "care",
    image: "why-furryfix/philosophy-brushing.jpg",
    imageAlt: "A man gently brushing the coat of a small white fluffy dog on a grooming table",
    imageClass: "object-[45%_40%]",
    intro:
      "Everyday grooming is not a spa day. It is a handful of small habits that fit beside breakfast, a walk, or the few minutes you already spend on the floor together. When those habits stay short, they become easy. When they stay kind, they become something you both look forward to.",
    body: parseBody(`
## Begin with a hello your hands can learn from
Before you pick up a tool, run your hands over your dog from neck to tail, then down each leg. You are saying hello and you are noticing. A new bump, a bit of sticky residue, a tickle of grit behind the ear, a paw that feels warmer than usual: these are the details a daily touch catches. You do not need to name them perfectly. You only need to know what is ordinary so a change stands out.

If you notice anything unusual or concerning, consult your veterinarian. The daily once-over is for awareness, not for treatment. Keep it light, and let your dog lean in if they like the contact.

This hello can live in the same minute every day. After the morning walk, while the kettle boils, or before you sit down at night. Tie it to something you already do and it will happen. Leave it as a separate "grooming block" on a busy calendar and it will be the first thing you skip.

## A short brush, most days
Brushing does not have to cover the whole dog every time. A minute on the chest one day and a minute on the hindquarters the next still counts. Follow the direction of the coat. Use a light hand. If you meet a small tangle, hold the fur closer to the skin with one hand and work the tangle with the other so you are not tugging the skin itself.

Dogs with longer coats often need this more often so knots do not settle in the feathering. Dogs with short coats still benefit. Brushing spreads the natural oils you can feel, lifts loose hair, and gives you another moment of contact. Skip a day when life is full. Come back the next. A routine survives missed days better than it survives guilt.

Keep the brush in the room where the hello happens. Tools that are visible get used. Tools that require a search become a project, and projects get postponed.

## Paws, face, and the edges of the body
Paws meet the world first. A quick look between the toes, a wipe if they are wet or dusty, and a glance at the nails is a complete paw check for most evenings. You are not performing a procedure. You are seeing whether anything is caught, cracked, or worn in a way that was not there last week. If nails are long enough to bother your dog, or if you are unsure about trimming, a groomer or veterinarian can show you a safe approach. Guessing with clippers is not part of a simple home routine.

The face likes gentleness. A soft, barely damp cloth can wipe sleep from the corners of the eyes and a bit of breakfast from the muzzle. Avoid pushing into the ears. Looking at the outer ear and noticing odour or redness is enough at home. Anything that worries you belongs in a conversation with your veterinarian, not in a cotton swab experiment.

The sanitary areas and the feathering behind the legs can pick up debris on walks. A careful wipe or a brief brush there keeps your dog more comfortable and your home a little easier. Go slowly, and stop if your dog is not ready for handling in those spots. You can practise the touch for a second or two without finishing a full clean.

## Make the ending feel like the rest of the day
When you are done, say so with the same short phrase and then do something normal. A treat, a toy, or simply staying on the floor for another minute tells your dog that grooming is a chapter, not a trap. If they walked away halfway, invite them once and then let it go. Chasing them with a brush teaches the wrong lesson.

Over a week, this routine might look almost invisible: hands, a short brush, paws, a cloth, a kind stop. That is the point. Everyday care should feel rewarding, not impressive. The reward is a dog who is used to being handled, a coat that stays more comfortable, and a few quiet minutes that belong to the two of you.

If a part of the routine starts to feel hard, shrink that part. One paw. Three strokes. A look instead of a wipe. Small and steady will take you further than a perfect checklist you abandon.
    `),
    takeaways: [
      "A daily hands-on hello helps you notice what is normal for your dog.",
      "A short brush, a paw check, and a soft cloth are enough for most ordinary days.",
      "Leave ear and nail treatments to a veterinarian or groomer when you are unsure.",
      "End with a familiar phrase and a calm moment so the habit stays welcome.",
    ],
  },
  {
    slug: "why-regular-grooming-matters",
    title: "Why Regular Grooming Is More Than Just Keeping Your Dog Clean",
    excerpt: "Grooming is also about bonding, routine, observation, and spending quality time with your pet.",
    category: "Care & Wellness",
    filters: ["Care & Wellness"],
    family: "care",
    image: "lifestyle/loving-hug.jpg",
    imageAlt: "A man warmly hugging his smiling golden retriever outdoors",
    imageClass: "object-[50%_40%]",
    intro:
      "A clean coat is a lovely result. It is not the whole reason to groom. Regular grooming is time your dog can count on, a chance to notice how they are, and a quiet way of saying you are paying attention. Cleanliness comes along for the ride. The bond is the point you get to keep.",
    body: parseBody(`
## Bonding lives in ordinary touch
Dogs learn your affection in the ways you repeat. A brush, a slow hand along the ribs, a minute spent on a paw: these are conversations without a lot of words. They are different from a game, and they are different from a command. Your dog gets to be still with you, and you get to be still with them. That shared stillness is bonding, even when nobody would film it.

Some dogs show their pleasure obviously, with a lean or a sigh. Others simply stay. Staying is enough. If your dog only enjoys grooming in very short pieces, those pieces still count as time together. Quality is not measured in how much coat you finished. It is measured in whether your dog was willing to be near your hands.

You can talk while you groom, or you can stay quiet. Many pet parents find that this is one of the few parts of the day with no errand attached. Protect that. A phone on the table can wait. Your dog can tell when the touch is half present.

## Routine is a kind of comfort
Dogs do well when the day has a shape. Meals, walks, and sleep already give them that. Grooming can be another small landmark: after the evening walk, before you both settle. The predictability matters as much as the brush. A dog who knows what comes next spends less energy worrying about it.

Routine also steadies you. On a scattered day, a three-minute groom is a way back to your dog. You do not have to feel inspired. You only have to show up in the usual spot. Over months, that showing up becomes part of how your home feels. It is care that does not depend on a special occasion.

If you travel, board your dog, or welcome a sitter, a simple routine is easier for someone else to continue. "Brush for a few minutes in the evening, and stop if he walks away" is a clear kindness. It keeps your dog's week recognisable even when you are not the one holding the brush.

## Observation is an act of love
Hands find what eyes miss. A small scab under the collar, a mat forming behind the ear, a paw that makes your dog shift weight, a coat that feels drier than last month: regular grooming is how these details arrive early. You are not expected to know the cause. You are in a good position to notice that something is different.

That noticing is part of wellness, in the everyday sense of the word. It is you paying attention to the animal who shares your house. If you notice anything unusual or concerning, consult your veterinarian. Bring the observation with you in plain language. "This spot has been red since Thursday" is more useful than a worry you cannot describe.

Grooming also shows you mood. A dog who usually enjoys the brush and suddenly will not be touched may be sore, tired, or simply done for the day. You do not have to decide which. You do have to respect the change and, if it continues, ask someone qualified to help you understand it.

## Clean is one chapter, not the title
Of course grooming helps a coat look and feel cared for. Loose hair on the brush is hair that is not on the sofa. A wiped paw is a kinder floor. A coat free of burrs is more comfortable on a walk. These practical gifts are real, and they are allowed to matter. They are still not the full story.

The fuller story is time. Regular grooming asks you to slow down beside your dog and to treat their body as something you know, not something you manage only when it becomes a problem. That knowledge makes baths easier later, handling easier at the vet's office, and daily life easier at home. Your dog learns that hands can be good news.

If you have been thinking of grooming as a chore you owe a standard of cleanliness, try a smaller definition this week. One unrushed session. One thing you notice. One moment of praise. The coat will be a little tidier. The relationship will be a little more practised. Both are worth the time.
    `),
    takeaways: [
      "Grooming is shared time, not only a way to keep a coat tidy.",
      "A predictable few minutes can comfort a dog as much as the brushing itself.",
      "Regular handling helps you notice changes early.",
      "If something seems unusual or concerning, consult your veterinarian.",
    ],
  },
  {
    slug: "prepare-dog-for-first-bath",
    title: "How to Prepare Your Dog for Their First Bath",
    excerpt: "Help your dog feel more comfortable with their first bath by creating a calm and positive experience.",
    category: "Puppy Care",
    filters: ["Puppy Care"],
    family: "bath",
    image: "about/hero-owner-dog.jpg",
    imageAlt: "A smiling young woman holding a fluffy tricolour puppy close to her cheek outdoors",
    imageClass: "object-[50%_55%]",
    intro:
      "A first bath is a first impression. Whether you are washing a puppy or a dog who has never been bathed in your home, the goal is not a show-day coat. The goal is a calm, positive experience they can recognise the next time. Preparation is most of the work, and it happens before anyone is wet.",
    body: parseBody(`
## Decide what "first bath" needs to mean
For some dogs, the first session should be a visit to the bathroom, a treat on the mat, and a damp paw. For others, a short real wash is realistic because they are already curious and steady. You get to choose the size of the lesson. A puppy has a short attention span and a long memory for scary moments, so smaller is usually wiser. An adult dog who is new to you deserves the same courtesy. You do not know which handling they have already met.

Pick a time when the house is quiet and you are not about to leave. Hunger for a game, a ringing doorbell, or your own hurry will fill the room. A first bath wants spare minutes you are willing not to use. If it ends early, that is success, not a failed plan.

## Prepare the space so you can stay with them
Put the towel, a soft cloth, a non-slip mat, and a dog shampoo where your hands already know the path. You should not need to open a cupboard once your dog is in the room. A shampoo made for dogs belongs in that setup. If you are using the FurryFix shampoo, that is FurryFix Shed Control 2-in-1 Conditioning Shampoo, kept within reach and used sparingly.

Warm the room if you can. Puppies and small dogs lose heat quickly once they are wet. A chilled first bath is a memorable first bath, and not in the way you want. Have a second towel ready so the first one can be wrapped around them the moment you stop.

Close the door. Lower your voice to the one you use when they are almost asleep. The space should feel boring in the best way: nothing startling, nothing to chase, nothing that beeps.

## Let the bathroom become familiar first
On a day before the bath, or in the first minutes of the same day, let your dog explore. Sniff the tub. Put a treat on the mat. Sit on the floor and let them climb into your lap if they offer. Turn the tap on and off at a distance so the sound is a background event, not a surprise next to their ear. Praise any willingness to stay in the room.

If they will not enter, do not drag them over the edge and call it preparation. End the visit. Try again when everyone is fresh. A dog who walks in by choice, even for a second, has already started the bath.

Handling practice helps too. Touch paws, ears, and the tail base gently during ordinary cuddles, then stop. A first bath is easier when those touches are not brand new on the same day as the water.

## Keep the water small and the praise specific
When you do add water, start with a cup or a slow trickle on a back paw or the shoulder. Watch the face. If your dog looks at you and stays, tell them they are doing well right then. If they scramble, stop the water, let them shake, and decide whether today includes any more. One calm splash can be the entire first bath. You can wash the rest of the coat when trust is wider.

If you lather, use a little shampoo and keep it off the face. Rinse with the same unhurried trickle. A puppy does not need a long massage. They need to learn that water comes, water goes, and you are still kind. Dry them fully enough that they are warm, and move straight into a cuddle, a meal, or a quiet toy. The ending should be easy to like.

Skip extra handling that is not required for this bath. Nails, ear treatments, and long brushing sessions can wait for another day. Stacking every kind of grooming onto a first wash is how a simple lesson becomes too much.

## If fear shows up, make the next step smaller
Panting, freezing, yelping, or trying to climb out are information. They mean this version of the bath is too big. Wrap your dog, leave the bathroom, and let the day become ordinary again. Next time, return to the last step that was acceptable: standing in the room, a treat in the tub, a damp cloth on a dry shoulder. Progress can take several short visits. That is still preparation, and it is still a first bath done well.

If you notice anything unusual or concerning on the skin while you are handling them, consult your veterinarian before you try to wash it away. A first bath should not be a home treatment. It should be a gentle introduction to being cared for.

When the day stays calm, you have given your dog a story they can live with: the bath was predictable, you stayed close, and it ended while they were still all right. That story is the one you want them to bring to every bath after this.
    `),
    takeaways: [
      "A first bath can be very short. Familiarity matters more than a fully washed coat.",
      "Prepare the room, the towel, and a dog shampoo so you never have to step away.",
      "Start with sound, smell, and a little water before a full wash.",
      "If your dog is frightened, stop and make the next visit smaller.",
    ],
  },
  {
    slug: "dog-grooming-essentials",
    title: "Dog Grooming Essentials Every Pet Parent Should Know",
    excerpt: "Explore the basic grooming tools and habits that can make everyday pet care easier.",
    category: "Pet Care",
    filters: ["Pet Care"],
    family: "care",
    image: "about/story-home.jpg",
    imageAlt: "A woman kneeling on a rug in a warmly lit living room, stroking her relaxed golden doodle",
    imageClass: "object-[46%_70%]",
    intro:
      "You do not need a cupboard full of tools to care for your dog's coat. A few essentials, kept where you will actually use them, make everyday grooming easier and baths less of a production. The habits around those tools matter as much as the tools. Start simple, and add only what your dog's coat truly asks for.",
    body: parseBody(`
## A brush that suits the coat you have
The first essential is a brush or comb you understand. Short coats often do well with a soft brush that lifts loose hair without scratching. Longer coats usually need a comb that can reach closer to the skin, plus a brush for the surface. You do not need one of every kind on the market. You need one you will pick up, and a second only if tangles are part of your week.

Learn how it feels on your own forearm. If it scratches you, it will scratch your dog. Use slow strokes, and keep sessions short enough that the brush stays associated with quiet attention. Replace a tool that is bent, rusty, or missing teeth. Worn tools pull.

Keep it in a basket or on a low shelf in the room where you sit with your dog. An essential that lives in a closed box is not part of the routine yet.

## Towels, a cloth, and a surface that stays still
Two towels cover most baths: one to wrap, one to dry the floor or to offer a second wrap if the first is soaked. Choose towels you do not mind getting hairy. A small soft cloth, kept clean, is the right tool for the face. It lets you wipe gently without sending water toward the eyes.

A non-slip mat is an essential even though it is not glamorous. Baths and paw washes go better when feet can grip. If your dog is groomed on a table or a counter, they also need a surface that will not surprise them, and they need you within arm's reach the whole time. Never leave a dog unattended on a raised surface.

A treat pouch is optional. A few treats your dog already likes, set out before you begin, are enough. The essential is timing: offer them for calm standing or for accepting a touch, not as a bribe after a struggle has already started.

## A shampoo made for dogs
When a bath is warranted, the essential product is a shampoo made for dogs, used in a modest amount and rinsed thoroughly. In the FurryFix range, that shampoo is FurryFix Shed Control 2-in-1 Conditioning Shampoo. Keep it with the towels so bath day does not begin with a search. You do not need a line of extra bottles to get started. One dog shampoo, used kindly, is the basic kit.

Household products made for people, dishes, or floors are not stand-ins. Leave them out of the tub. If a groomer or veterinarian has suggested a specific approach for your dog's skin, follow that personal guidance. This journal is not a treatment plan, and a general home routine should stay general.

Store the shampoo where it will not be knocked into a curious mouth, and keep the cap closed. Simple storage is part of using a product well.

## Habits that make the tools work
The most useful essential is a habit: the same short greeting with your hands, a few brush strokes, a look at the paws, and a clear ending. Tools cannot replace that rhythm. A beautiful comb used once a month in a hurry will not feel as kind as an ordinary brush used often and lightly.

Handle the sensitive places in tiny doses during calm moments, not only when they are dirty. Paws, mouth, ears, and tail become easier at bath time if they are familiar at cuddle time. Stop when your dog asks you to. A habit that includes consent will last longer than a habit that relies on holding tighter.

Watch what you find. Grooming essentials include your attention. If you notice anything unusual or concerning, consult your veterinarian. A new smell from an ear, a sore spot under the collar, or a paw your dog will not put down are reasons to ask, not reasons to buy another tool.

A home kit can stay small:
- A brush or comb that does not scratch
- Two towels and a soft cloth for the face
- A mat that keeps paws from slipping
- FurryFix Shed Control 2-in-1 Conditioning Shampoo for bath day
- A few treats your dog already enjoys

## What you can happily leave for later
Clippers, dryers, complicated detangling products, and a drawer of specialty sprays are not required for everyday care. Some homes never need them. If your dog's coat becomes matted, or if nail trims make you nervous, a professional groomer is a better essential than a gadget you are afraid to use. Asking for help is part of being prepared.

Build the kit slowly: brush, towels, cloth, mat, and a dog shampoo. Learn your dog's version of a good session. The essentials are there to make care easier, so your dog can be comfortable and you can spend the time together without wrestling a long shopping list.
    `),
    takeaways: [
      "A suitable brush, towels, a face cloth, and a non-slip mat cover most home grooming.",
      "Use a dog shampoo. FurryFix Shed Control 2-in-1 Conditioning Shampoo is the shampoo in the FurryFix range.",
      "Short, regular handling matters more than a large kit.",
      "Ask a veterinarian about anything unusual, and a groomer when a coat or nail trim is beyond a simple home routine.",
    ],
  },
];

export function getBlogPosts(): readonly BlogPost[] {
  return posts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function relatedPosts(slug: string): readonly BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return [];
  return posts.filter((post) => post.family === current.family && post.slug !== slug).slice(0, 3);
}

export function blogStaticParams(): { slug: string }[] {
  return posts.map((post) => ({ slug: post.slug }));
}

export function toBlogCard(post: BlogPost, excerpt = post.excerpt): BlogCardModel {
  return {
    href: `/blog/${post.slug}`,
    title: post.title,
    excerpt,
    category: post.category,
    filters: post.filters,
    imageSrc: publicAsset([post.image]),
    imageAlt: post.imageAlt,
    imageClass: post.imageClass,
    minutes: readingMinutes(post),
  };
}

export function resolveJournalHero(): { src: string; alt: string; imageClass: string } | null {
  for (const image of journalHero.images) {
    const src = publicAsset([image.file]);
    if (src) return { src, alt: image.alt, imageClass: image.imageClass };
  }
  return null;
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    dateModified: blogLastUpdated,
  };
}

export function journalJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: journalHero.label,
    description: journalHero.lede,
  };
}
