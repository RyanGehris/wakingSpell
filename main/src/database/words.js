import db from './db.js';

// paste this info mongo to seed words table
// db.words.insertMany([ { "word": "able" }, { "word": "around" }, { "word": "bones" }, { "word": "chance" }, { "word": "covered" }, { "word": "draw" }, { "word": "experience" }, { "word": "about" }, { "word": "arrived" }, { "word": "book" }, { "word": "change" }, { "word": "cows" }, { "word": "drawing" }, { "word": "experiment" }, { "word": "above" }, { "word": "art" }, { "word": "born" }, { "word": "chart" }, { "word": "create" }, { "word": "dress" }, { "word": "explain" }, { "word": "accident" }, { "word": "both" }, { "word": "check" }, { "word": "cried" }, { "word": "drive" }, { "word": "express" }, { "word": "accidentally" }, { "word": "ask" }, { "word": "bottom" }, { "word": "chief" }, { "word": "crops" }, { "word": "drop" }, { "word": "extreme" }, { "word": "across" }, { "word": "at" }, { "word": "bought" }, { "word": "child" }, { "word": "cross" }, { "word": "dry" }, { "word": "eyes" }, { "word": "act" }, { "word": "away" }, { "word": "box" }, { "word": "children" }, { "word": "crowd" }, { "word": "during" }, { "word": "face" }, { "word": "action" }, { "word": "baby" }, { "word": "boy" }, { "word": "choose" }, { "word": "current" }, { "word": "each" }, { "word": "fact" }, { "word": "actually" }, { "word": "back" }, { "word": "branches" }, { "word": "church" }, { "word": "cut" }, { "word": "early" }, { "word": "factories" }, { "word": "add" }, { "word": "bad" }, { "word": "break" }, { "word": "circle" }, { "word": "dance" }, { "word": "ears" }, { "word": "factors" }, { "word": "addition" }, { "word": "ball" }, { "word": "breath" }, { "word": "city" }, { "word": "dark" }, { "word": "earth" }, { "word": "fair" }, { "word": "address" }, { "word": "bank" }, { "word": "breathe" }, { "word": "class" }, { "word": "day" }, { "word": "east" }, { "word": "fall" }, { "word": "adjective" }, { "word": "base" }, { "word": "bright" }, { "word": "clean" }, { "word": "dead" }, { "word": "easy" }, { "word": "family" }, { "word": "afraid" }, { "word": "be" }, { "word": "bring" }, { "word": "clear" }, { "word": "deal" }, { "word": "eat" }, { "word": "famous" }, { "word": "africa" }, { "word": "bear" }, { "word": "british" }, { "word": "climbed" }, { "word": "death" }, { "word": "edge" }, { "word": "far" }, { "word": "after" }, { "word": "beat" }, { "word": "broken" }, { "word": "close" }, { "word": "decided" }, { "word": "effect" }, { "word": "farm" }, { "word": "again" }, { "word": "beautiful" }, { "word": "brother" }, { "word": "clothes" }, { "word": "decimal" }, { "word": "eggs" }, { "word": "farmers" }, { "word": "against" }, { "word": "became" }, { "word": "brought" }, { "word": "cloud" }, { "word": "deep" }, { "word": "eight" }, { "word": "fast" }, { "word": "age" }, { "word": "because" }, { "word": "brown" }, { "word": "coast" }, { "word": "describe" }, { "word": "eighth" }, { "word": "father" }, { "word": "ago" }, { "word": "become" }, { "word": "build" }, { "word": "cold" }, { "word": "desert" }, { "word": "either" }, { "word": "favourite" }, { "word": "agreed" }, { "word": "bed" }, { "word": "building" }, { "word": "colour" }, { "word": "design" }, { "word": "electric" }, { "word": "fear" }, { "word": "ahead" }, { "word": "been" }, { "word": "built" }, { "word": "column" }, { "word": "details" }, { "word": "elements" }, { "word": "february" }, { "word": "air" }, { "word": "before" }, { "word": "burning" }, { "word": "come" }, { "word": "determine" }, { "word": "else" }, { "word": "feel" }, { "word": "all" }, { "word": "began" }, { "word": "business" }, { "word": "common" }, { "word": "developed" }, { "word": "end" }, { "word": "feeling" }, { "word": "allow" }, { "word": "begin" }, { "word": "busy" }, { "word": "company" }, { "word": "dictionary" }, { "word": "energy" }, { "word": "feet" }, { "word": "almost" }, { "word": "behind" }, { "word": "but" }, { "word": "compare" }, { "word": "did" }, { "word": "engine" }, { "word": "fell" }, { "word": "alone" }, { "word": "being" }, { "word": "buy" }, { "word": "complete" }, { "word": "didn’t" }, { "word": "england" }, { "word": "felt" }, { "word": "along" }, { "word": "believe" }, { "word": "by" }, { "word": "compound" }, { "word": "died" }, { "word": "english" }, { "word": "few" }, { "word": "already" }, { "word": "bell" }, { "word": "calendar" }, { "word": "conditions" }, { "word": "difference" }, { "word": "enjoy" }, { "word": "field" }, { "word": "also" }, { "word": "belong" }, { "word": "called" }, { "word": "consider" }, { "word": "different" }, { "word": "enough" }, { "word": "fight" }, { "word": "although" }, { "word": "below" }, { "word": "came" }, { "word": "consonant" }, { "word": "difficult" }, { "word": "entered" }, { "word": "figure" }, { "word": "always" }, { "word": "beside" }, { "word": "can" }, { "word": "contain" }, { "word": "direct" }, { "word": "entire" }, { "word": "filled" }, { "word": "am" }, { "word": "best" }, { "word": "cannot" }, { "word": "continued" }, { "word": "direction" }, { "word": "equal" }, { "word": "finally" }, { "word": "america" }, { "word": "better" }, { "word": "can’t" }, { "word": "control" }, { "word": "disappear" }, { "word": "equation" }, { "word": "find" }, { "word": "among" }, { "word": "between" }, { "word": "capital" }, { "word": "cook" }, { "word": "discovered" }, { "word": "especially" }, { "word": "fine" }, { "word": "amount" }, { "word": "bicycle" }, { "word": "captain" }, { "word": "cool" }, { "word": "distance" }, { "word": "europe" }, { "word": "fingers" }, { "word": "an" }, { "word": "big" }, { "word": "car" }, { "word": "copy" }, { "word": "divided" }, { "word": "even" }, { "word": "finished" }, { "word": "and" }, { "word": "bill" }, { "word": "care" }, { "word": "corn" }, { "word": "division" }, { "word": "evening" }, { "word": "fire" }, { "word": "angle" }, { "word": "birds" }, { "word": "carefully" }, { "word": "corner" }, { "word": "do" }, { "word": "ever" }, { "word": "first" }, { "word": "animal" }, { "word": "bit" }, { "word": "carry" }, { "word": "correct" }, { "word": "doctor" }, { "word": "every" }, { "word": "fish" }, { "word": "another" }, { "word": "black" }, { "word": "case" }, { "word": "cost" }, { "word": "does" }, { "word": "everyone" }, { "word": "fit" }, { "word": "answer" }, { "word": "block" }, { "word": "cat" }, { "word": "cotton" }, { "word": "doesn’t" }, { "word": "everything" }, { "word": "five" }, { "word": "any" }, { "word": "blood" }, { "word": "catch" }, { "word": "could" }, { "word": "dog" }, { "word": "exactly" }, { "word": "flat" }, { "word": "anything" }, { "word": "blow" }, { "word": "cattle" }, { "word": "couldn’t" }, { "word": "done" }, { "word": "example" }, { "word": "floor" }, { "word": "appear" }, { "word": "blue" }, { "word": "caught" }, { "word": "count" }, { "word": "don’t" }, { "word": "except" }, { "word": "flow" }, { "word": "apple" }, { "word": "board" }, { "word": "cause" }, { "word": "country" }, { "word": "door" }, { "word": "exciting" }, { "word": "flowers" }, { "word": "are" }, { "word": "boat" }, { "word": "cells" }, { "word": "exercise" }, { "word": "fly" }, { "word": "area" }, { "word": "arms" }, { "word": "centre" }, { "word": "century" }, { "word": "follow" }, { "word": "food" }, { "word": "happy" }, { "word": "information" }, { "word": "letter" }, { "word": "mind" }, { "word": "oil" }, { "word": "popular" }, { "word": "foot" }, { "word": "hard" }, { "word": "insects" }, { "word": "level" }, { "word": "mine" }, { "word": "old" }, { "word": "position" }, { "word": "for" }, { "word": "has" }, { "word": "inside" }, { "word": "library" }, { "word": "minute" }, { "word": "on" }, { "word": "possible" }, { "word": "force" }, { "word": "hat" }, { "word": "instead" }, { "word": "lie" }, { "word": "miss" }, { "word": "once" }, { "word": "possession" }, { "word": "forest" }, { "word": "have" }, { "word": "instruments" }, { "word": "life" }, { "word": "modern" }, { "word": "one" }, { "word": "potatoes" }, { "word": "form" }, { "word": "he" }, { "word": "interest" }, { "word": "lifted" }, { "word": "molecules" }, { "word": "only" }, { "word": "pounds" }, { "word": "forward" }, { "word": "head" }, { "word": "interesting" }, { "word": "light" }, { "word": "moment" }, { "word": "open" }, { "word": "power" }, { "word": "found" }, { "word": "hear" }, { "word": "into" }, { "word": "like" }, { "word": "money" }, { "word": "opposite" }, { "word": "practise" }, { "word": "four" }, { "word": "heard" }, { "word": "iron" }, { "word": "line" }, { "word": "months" }, { "word": "or" }, { "word": "prepared" }, { "word": "fraction" }, { "word": "heart" }, { "word": "is" }, { "word": "list" }, { "word": "moon" }, { "word": "order" }, { "word": "present" }, { "word": "france" }, { "word": "heat" }, { "word": "island" }, { "word": "listen" }, { "word": "more" }, { "word": "ordinary" }, { "word": "president" }, { "word": "free" }, { "word": "heavy" }, { "word": "isn’t" }, { "word": "little" }, { "word": "morning" }, { "word": "other" }, { "word": "pressure" }, { "word": "french" }, { "word": "height" }, { "word": "it" }, { "word": "live" }, { "word": "most" }, { "word": "our" }, { "word": "pretty" }, { "word": "fresh" }, { "word": "held" }, { "word": "it’s" }, { "word": "located" }, { "word": "mother" }, { "word": "out" }, { "word": "printed" }, { "word": "friends" }, { "word": "help" }, { "word": "itself" }, { "word": "long" }, { "word": "mountains" }, { "word": "outside" }, { "word": "probably" }, { "word": "from" }, { "word": "her" }, { "word": "japanese" }, { "word": "look" }, { "word": "mouth" }, { "word": "over" }, { "word": "problem" }, { "word": "front" }, { "word": "here" }, { "word": "job" }, { "word": "lost" }, { "word": "move" }, { "word": "own" }, { "word": "process" }, { "word": "fruit" }, { "word": "high" }, { "word": "joined" }, { "word": "lot" }, { "word": "movement" }, { "word": "oxygen" }, { "word": "produce" }, { "word": "full" }, { "word": "hill" }, { "word": "jumped" }, { "word": "loud" }, { "word": "much" }, { "word": "page" }, { "word": "products" }, { "word": "fun" }, { "word": "him" }, { "word": "just" }, { "word": "love" }, { "word": "music" }, { "word": "paint" }, { "word": "promise" }, { "word": "game" }, { "word": "himself" }, { "word": "keep" }, { "word": "low" }, { "word": "must" }, { "word": "pair" }, { "word": "property" }, { "word": "garden" }, { "word": "his" }, { "word": "kept" }, { "word": "machine" }, { "word": "my" }, { "word": "paper" }, { "word": "provide" }, { "word": "gas" }, { "word": "history" }, { "word": "key" }, { "word": "made" }, { "word": "name" }, { "word": "paragraph" }, { "word": "pulled" }, { "word": "gave" }, { "word": "hit" }, { "word": "killed" }, { "word": "main" }, { "word": "nation" }, { "word": "park" }, { "word": "purpose" }, { "word": "general" }, { "word": "hold" }, { "word": "kind" }, { "word": "major" }, { "word": "natural" }, { "word": "part" }, { "word": "pushed" }, { "word": "get" }, { "word": "hole" }, { "word": "king" }, { "word": "make" }, { "word": "naughty" }, { "word": "particular" }, { "word": "put" }, { "word": "girl" }, { "word": "home" }, { "word": "knew" }, { "word": "mall" }, { "word": "near" }, { "word": "party" }, { "word": "quarter" }, { "word": "give" }, { "word": "hope" }, { "word": "know" }, { "word": "man" }, { "word": "necessary" }, { "word": "passed" }, { "word": "questions" }, { "word": "glass" }, { "word": "horse" }, { "word": "knowledge" }, { "word": "many" }, { "word": "need" }, { "word": "past" }, { "word": "quickly" }, { "word": "go" }, { "word": "hot" }, { "word": "known" }, { "word": "map" }, { "word": "never" }, { "word": "pattern" }, { "word": "quiet" }, { "word": "god" }, { "word": "hours" }, { "word": "lady" }, { "word": "march" }, { "word": "new" }, { "word": "pay" }, { "word": "quite" }, { "word": "gold" }, { "word": "house" }, { "word": "lake" }, { "word": "mark" }, { "word": "next" }, { "word": "peculiar" }, { "word": "race" }, { "word": "gone" }, { "word": "how" }, { "word": "land" }, { "word": "match" }, { "word": "night" }, { "word": "people" }, { "word": "radio" }, { "word": "good" }, { "word": "however" }, { "word": "language" }, { "word": "material" }, { "word": "no" }, { "word": "per" }, { "word": "rain" }, { "word": "got" }, { "word": "huge" }, { "word": "large" }, { "word": "matter" }, { "word": "north" }, { "word": "perhaps" }, { "word": "raised" }, { "word": "government" }, { "word": "human" }, { "word": "last" }, { "word": "may" }, { "word": "northern" }, { "word": "period" }, { "word": "ran" }, { "word": "grammar" }, { "word": "hundred" }, { "word": "late" }, { "word": "maybe" }, { "word": "nose" }, { "word": "person" }, { "word": "rather" }, { "word": "grass" }, { "word": "hunting" }, { "word": "laughed" }, { "word": "me" }, { "word": "not" }, { "word": "phrase" }, { "word": "reached" }, { "word": "great" }, { "word": "ice" }, { "word": "law" }, { "word": "means" }, { "word": "note" }, { "word": "picked" }, { "word": "read" }, { "word": "greek" }, { "word": "idea" }, { "word": "lay" }, { "word": "measure" }, { "word": "nothing" }, { "word": "picture" }, { "word": "ready" }, { "word": "green" }, { "word": "if" }, { "word": "lead" }, { "word": "meat" }, { "word": "notice" }, { "word": "piece" }, { "word": "real" }, { "word": "grew" }, { "word": "i’ll" }, { "word": "learn" }, { "word": "medicine" }, { "word": "noun" }, { "word": "place" }, { "word": "reason" }, { "word": "ground" }, { "word": "imagine" }, { "word": "least" }, { "word": "meet" }, { "word": "now" }, { "word": "plains" }, { "word": "received" }, { "word": "group" }, { "word": "important" }, { "word": "leave" }, { "word": "melody" }, { "word": "number" }, { "word": "plan" }, { "word": "recent" }, { "word": "grow" }, { "word": "in" }, { "word": "led" }, { "word": "members" }, { "word": "object" }, { "word": "plane" }, { "word": "record" }, { "word": "guard" }, { "word": "inches" }, { "word": "left" }, { "word": "men" }, { "word": "observe" }, { "word": "planets" }, { "word": "red" }, { "word": "guess" }, { "word": "include" }, { "word": "legs" }, { "word": "mention" }, { "word": "occasionally" }, { "word": "plant" }, { "word": "region" }, { "word": "guide" }, { "word": "increase" }, { "word": "length" }, { "word": "metal" }, { "word": "ocean" }, { "word": "play" }, { "word": "regular" }, { "word": "gun" }, { "word": "indian" }, { "word": "less" }, { "word": "method" }, { "word": "of" }, { "word": "please" }, { "word": "reign" }, { "word": "had" }, { "word": "indicate" }, { "word": "let" }, { "word": "middle" }, { "word": "off" }, { "word": "plural" }, { "word": "remain" }, { "word": "hair" }, { "word": "industry" }, { "word": "let’s" }, { "word": "might" }, { "word": "office" }, { "word": "poem" }, { "word": "remember" }, { "word": "half" }, { "word": "mile" }, { "word": "often" }, { "word": "point" }, { "word": "repeated" }, { "word": "hand" }, { "word": "milk" }, { "word": "oh" }, { "word": "pole" }, { "word": "report" }, { "word": "happened" }, { "word": "million" }, { "word": "poor" }, { "word": "represent" }, { "word": "rest" }, { "word": "result" }, { "word": "sharp" }, { "word": "space" }, { "word": "swim" }, { "word": "tools" }, { "word": "wasn’t" }, { "word": "work" }, { "word": "return" }, { "word": "she" }, { "word": "speak" }, { "word": "syllables" }, { "word": "top" }, { "word": "watch" }, { "word": "workers" }, { "word": "rhythm" }, { "word": "ship" }, { "word": "special" }, { "word": "symbols" }, { "word": "total" }, { "word": "water" }, { "word": "world" }, { "word": "rich" }, { "word": "shoes" }, { "word": "speed" }, { "word": "system" }, { "word": "touch" }, { "word": "waves" }, { "word": "would" }, { "word": "ride" }, { "word": "shop" }, { "word": "spell" }, { "word": "table" }, { "word": "toward" }, { "word": "way" }, { "word": "wouldn’t" }, { "word": "right" }, { "word": "short" }, { "word": "spot" }, { "word": "take" }, { "word": "town" }, { "word": "we" }, { "word": "write" }, { "word": "ring" }, { "word": "should" }, { "word": "spread" }, { "word": "talk" }, { "word": "track" }, { "word": "wear" }, { "word": "written" }, { "word": "rise" }, { "word": "shoulder" }, { "word": "spring" }, { "word": "tall" }, { "word": "trade" }, { "word": "weather" }, { "word": "wrong" }, { "word": "river" }, { "word": "shouted" }, { "word": "square" }, { "word": "teacher" }, { "word": "train" }, { "word": "week" }, { "word": "wrote" }, { "word": "rolled" }, { "word": "show" }, { "word": "stand" }, { "word": "team" }, { "word": "travel" }, { "word": "weight" }, { "word": "yard" }, { "word": "room" }, { "word": "shown" }, { "word": "stars" }, { "word": "tell" }, { "word": "tree" }, { "word": "we’ll" }, { "word": "years" }, { "word": "root" }, { "word": "side" }, { "word": "start" }, { "word": "temperature" }, { "word": "triangle" }, { "word": "well" }, { "word": "yellow" }, { "word": "rope" }, { "word": "sight" }, { "word": "state" }, { "word": "ten" }, { "word": "trip" }, { "word": "went" }, { "word": "yes" }, { "word": "rose" }, { "word": "sign" }, { "word": "statement" }, { "word": "terms" }, { "word": "trouble" }, { "word": "were" }, { "word": "yet" }, { "word": "round" }, { "word": "silent" }, { "word": "stay" }, { "word": "test" }, { "word": "truck" }, { "word": "west" }, { "word": "you" }, { "word": "row" }, { "word": "similar" }, { "word": "steel" }, { "word": "than" }, { "word": "true" }, { "word": "western" }, { "word": "young" }, { "word": "rule" }, { "word": "simple" }, { "word": "step" }, { "word": "that" }, { "word": "try" }, { "word": "what" }, { "word": "your" }, { "word": "run" }, { "word": "since" }, { "word": "stick" }, { "word": "the" }, { "word": "tube" }, { "word": "wheels" }, { "word": "you’re" }, { "word": "safe" }, { "word": "sing" }, { "word": "still" }, { "word": "their" }, { "word": "turn" }, { "word": "when" }, { "word": "yourself" }, { "word": "said" }, { "word": "single" }, { "word": "stone" }, { "word": "them" }, { "word": "two" }, { "word": "where" }, { "word": "sail" }, { "word": "sir" }, { "word": "stood" }, { "word": "themselves" }, { "word": "type" }, { "word": "whether" }, { "word": "same" }, { "word": "sister" }, { "word": "stop" }, { "word": "then" }, { "word": "uncle" }, { "word": "which" }, { "word": "sand" }, { "word": "sit" }, { "word": "store" }, { "word": "there" }, { "word": "under" }, { "word": "while" }, { "word": "sat" }, { "word": "site" }, { "word": "story" }, { "word": "therefore" }, { "word": "underline" }, { "word": "white" }, { "word": "save" }, { "word": "six" }, { "word": "straight" }, { "word": "these" }, { "word": "understand" }, { "word": "who" }, { "word": "saw" }, { "word": "size" }, { "word": "strange" }, { "word": "they" }, { "word": "unit" }, { "word": "whole" }, { "word": "say" }, { "word": "skin" }, { "word": "stream" }, { "word": "they’re" }, { "word": "until" }, { "word": "whose" }, { "word": "scale" }, { "word": "sky" }, { "word": "strength" }, { "word": "thick" }, { "word": "up" }, { "word": "why" }, { "word": "school" }, { "word": "sleep" }, { "word": "street" }, { "word": "thin" }, { "word": "upon" }, { "word": "wide" }, { "word": "science" }, { "word": "slowly" }, { "word": "stretched" }, { "word": "things" }, { "word": "us" }, { "word": "wife" }, { "word": "scientists" }, { "word": "small" }, { "word": "string" }, { "word": "think" }, { "word": "use" }, { "word": "wild" }, { "word": "score" }, { "word": "smell" }, { "word": "strong" }, { "word": "third" }, { "word": "usually" }, { "word": "will" }, { "word": "sea" }, { "word": "smiled" }, { "word": "students" }, { "word": "this" }, { "word": "valley" }, { "word": "win" }, { "word": "seat" }, { "word": "snow" }, { "word": "study" }, { "word": "those" }, { "word": "value" }, { "word": "wind" }, { "word": "second" }, { "word": "so" }, { "word": "subject" }, { "word": "though" }, { "word": "various" }, { "word": "window" }, { "word": "section" }, { "word": "soft" }, { "word": "substances" }, { "word": "thought" }, { "word": "verb" }, { "word": "wings" }, { "word": "see" }, { "word": "soil" }, { "word": "such" }, { "word": "thousands" }, { "word": "very" }, { "word": "winter" }, { "word": "seeds" }, { "word": "soldiers" }, { "word": "suddenly" }, { "word": "three" }, { "word": "view" }, { "word": "wire" }, { "word": "seem" }, { "word": "solution" }, { "word": "suffix" }, { "word": "through" }, { "word": "village" }, { "word": "wish" }, { "word": "seen" }, { "word": "solve" }, { "word": "sugar" }, { "word": "thus" }, { "word": "visit" }, { "word": "with" }, { "word": "sell" }, { "word": "some" }, { "word": "suggested" }, { "word": "tied" }, { "word": "voice" }, { "word": "within" }, { "word": "send" }, { "word": "someone" }, { "word": "sum" }, { "word": "time" }, { "word": "vowel" }, { "word": "without" }, { "word": "sense" }, { "word": "something" }, { "word": "summer" }, { "word": "tiny" }, { "word": "wait" }, { "word": "woman" }, { "word": "sent" }, { "word": "sometimes" }, { "word": "sun" }, { "word": "to" }, { "word": "walk" }, { "word": "women" }, { "word": "sentence" }, { "word": "son" }, { "word": "supply" }, { "word": "today" }, { "word": "wall" }, { "word": "wonder" }, { "word": "separate" }, { "word": "song" }, { "word": "suppose" }, { "word": "together" }, { "word": "want" }, { "word": "won’t" }, { "word": "serve" }, { "word": "soon" }, { "word": "sure" }, { "word": "told" }, { "word": "war" }, { "word": "wood" }, { "word": "set" }, { "word": "sound" }, { "word": "surface" }, { "word": "tone" }, { "word": "warm" }, { "word": "words" }, { "word": "settled" }, { "word": "south" }, { "word": "surprise" }, { "word": "too" }, { "word": "seven" }, { "word": "southern" }, { "word": "took" }, { "word": "several" }, { "word": "shall" }, { "word": "shape" }, { "word": "absence" }, { "word": "accommodate" }, { "word": "achieve" }, { "word": "acquire" }, { "word": "advice" }, { "word": "apparent" }, { "word": "arctic" }, { "word": "argument" }, { "word": "atheist" }, { "word": "athlete" }, { "word": "awful" }, { "word": "becoming" }, { "word": "beginning" }, { "word": "category" }, { "word": "ceiling" }, { "word": "cemetery" }, { "word": "changeable" }, { "word": "collectible" }, { "word": "coming" }, { "word": "committed" }, { "word": "conscience" }, { "word": "conscious" }, { "word": "consensus" }, { "word": "coolly" }, { "word": "deceive" }, { "word": "definitely" }, { "word": "desperate" }, { "word": "dilemma" }, { "word": "disappoint" }, { "word": "disastrous" }, { "word": "discipline" }, { "word": "embarrassment" }, { "word": "equipment" }, { "word": "exceed" }, { "word": "exhilarate" }, { "word": "existence" }, { "word": "fascinating" }, { "word": "fiery" }, { "word": "fluorescent" }, { "word": "foreign" }, { "word": "friend" }, { "word": "gauge" }, { "word": "grateful" }, { "word": "guarantee" }, { "word": "guidance" }, { "word": "harass" }, { "word": "hierarchy" }, { "word": "humorous" }, { "word": "ignorance" }, { "word": "immediately" }, { "word": "independent" }, { "word": "indispensable" }, { "word": "inoculate" }, { "word": "intelligence" }, { "word": "jealous" }, { "word": "jewelry" }, { "word": "judgment" }, { "word": "leisure" }, { "word": "liaison" }, { "word": "license" }, { "word": "maintenance" }, { "word": "mathematics" }, { "word": "medieval" }, { "word": "memento" }, { "word": "millennium" }, { "word": "miniature" }, { "word": "miniscule" }, { "word": "mischievous" }, { "word": "misspell" }, { "word": "mysterious" }, { "word": "neighbor" }, { "word": "noticeable" }, { "word": "nuclear" }, { "word": "occurrence" }, { "word": "omission" }, { "word": "original" }, { "word": "pastime" }, { "word": "perceive" }, { "word": "perseverance" }, { "word": "personally" }, { "word": "personnel" }, { "word": "playwright" }, { "word": "precede" }, { "word": "prejudice" }, { "word": "presence" }, { "word": "privilege" }, { "word": "professor" }, { "word": "pronunciation" }, { "word": "proof" }, { "word": "publicly" }, { "word": "questionnaire" }, { "word": "quit" }, { "word": "really" }, { "word": "recommend" }, { "word": "reference" }, { "word": "referred" }, { "word": "relevant" }, { "word": "religious" }, { "word": "repetition" }, { "word": "restaurant" }, { "word": "rhyme" }, { "word": "scissors" }, { "word": "secretary" }, { "word": "sergeant" }, { "word": "shining" }, { "word": "sincerely" }, { "word": "speech" }, { "word": "successful" }, { "word": "supersede" }, { "word": "surely" }, { "word": "thorough" }, { "word": "truly" }, { "word": "twelfth" }, { "word": "tyranny" }, { "word": "using" }, { "word": "vacuum" }, { "word": "weird" }, { "word": "withhold" }, { "word": "writing" }]);


let words = [
  {
      "word": "able"
  },
  {
      "word": "around"
  },
  {
      "word": "bones"
  },
  {
      "word": "chance"
  },
  {
      "word": "covered"
  },
  {
      "word": "draw"
  },
  {
      "word": "experience"
  },
  {
      "word": "about"
  },
  {
      "word": "arrived"
  },
  {
      "word": "book"
  },
  {
      "word": "change"
  },
  {
      "word": "cows"
  },
  {
      "word": "drawing"
  },
  {
      "word": "experiment"
  },
  {
      "word": "above"
  },
  {
      "word": "art"
  },
  {
      "word": "born"
  },
  {
      "word": "chart"
  },
  {
      "word": "create"
  },
  {
      "word": "dress"
  },
  {
      "word": "explain"
  },
  {
      "word": "accident"
  },
  {
      "word": "both"
  },
  {
      "word": "check"
  },
  {
      "word": "cried"
  },
  {
      "word": "drive"
  },
  {
      "word": "express"
  },
  {
      "word": "accidentally"
  },
  {
      "word": "ask"
  },
  {
      "word": "bottom"
  },
  {
      "word": "chief"
  },
  {
      "word": "crops"
  },
  {
      "word": "drop"
  },
  {
      "word": "extreme"
  },
  {
      "word": "across"
  },
  {
      "word": "at"
  },
  {
      "word": "bought"
  },
  {
      "word": "child"
  },
  {
      "word": "cross"
  },
  {
      "word": "dry"
  },
  {
      "word": "eyes"
  },
  {
      "word": "act"
  },
  {
      "word": "away"
  },
  {
      "word": "box"
  },
  {
      "word": "children"
  },
  {
      "word": "crowd"
  },
  {
      "word": "during"
  },
  {
      "word": "face"
  },
  {
      "word": "action"
  },
  {
      "word": "baby"
  },
  {
      "word": "boy"
  },
  {
      "word": "choose"
  },
  {
      "word": "current"
  },
  {
      "word": "each"
  },
  {
      "word": "fact"
  },
  {
      "word": "actually"
  },
  {
      "word": "back"
  },
  {
      "word": "branches"
  },
  {
      "word": "church"
  },
  {
      "word": "cut"
  },
  {
      "word": "early"
  },
  {
      "word": "factories"
  },
  {
      "word": "add"
  },
  {
      "word": "bad"
  },
  {
      "word": "break"
  },
  {
      "word": "circle"
  },
  {
      "word": "dance"
  },
  {
      "word": "ears"
  },
  {
      "word": "factors"
  },
  {
      "word": "addition"
  },
  {
      "word": "ball"
  },
  {
      "word": "breath"
  },
  {
      "word": "city"
  },
  {
      "word": "dark"
  },
  {
      "word": "earth"
  },
  {
      "word": "fair"
  },
  {
      "word": "address"
  },
  {
      "word": "bank"
  },
  {
      "word": "breathe"
  },
  {
      "word": "class"
  },
  {
      "word": "day"
  },
  {
      "word": "east"
  },
  {
      "word": "fall"
  },
  {
      "word": "adjective"
  },
  {
      "word": "base"
  },
  {
      "word": "bright"
  },
  {
      "word": "clean"
  },
  {
      "word": "dead"
  },
  {
      "word": "easy"
  },
  {
      "word": "family"
  },
  {
      "word": "afraid"
  },
  {
      "word": "be"
  },
  {
      "word": "bring"
  },
  {
      "word": "clear"
  },
  {
      "word": "deal"
  },
  {
      "word": "eat"
  },
  {
      "word": "famous"
  },
  {
      "word": "africa"
  },
  {
      "word": "bear"
  },
  {
      "word": "british"
  },
  {
      "word": "climbed"
  },
  {
      "word": "death"
  },
  {
      "word": "edge"
  },
  {
      "word": "far"
  },
  {
      "word": "after"
  },
  {
      "word": "beat"
  },
  {
      "word": "broken"
  },
  {
      "word": "close"
  },
  {
      "word": "decided"
  },
  {
      "word": "effect"
  },
  {
      "word": "farm"
  },
  {
      "word": "again"
  },
  {
      "word": "beautiful"
  },
  {
      "word": "brother"
  },
  {
      "word": "clothes"
  },
  {
      "word": "decimal"
  },
  {
      "word": "eggs"
  },
  {
      "word": "farmers"
  },
  {
      "word": "against"
  },
  {
      "word": "became"
  },
  {
      "word": "brought"
  },
  {
      "word": "cloud"
  },
  {
      "word": "deep"
  },
  {
      "word": "eight"
  },
  {
      "word": "fast"
  },
  {
      "word": "age"
  },
  {
      "word": "because"
  },
  {
      "word": "brown"
  },
  {
      "word": "coast"
  },
  {
      "word": "describe"
  },
  {
      "word": "eighth"
  },
  {
      "word": "father"
  },
  {
      "word": "ago"
  },
  {
      "word": "become"
  },
  {
      "word": "build"
  },
  {
      "word": "cold"
  },
  {
      "word": "desert"
  },
  {
      "word": "either"
  },
  {
      "word": "favourite"
  },
  {
      "word": "agreed"
  },
  {
      "word": "bed"
  },
  {
      "word": "building"
  },
  {
      "word": "colour"
  },
  {
      "word": "design"
  },
  {
      "word": "electric"
  },
  {
      "word": "fear"
  },
  {
      "word": "ahead"
  },
  {
      "word": "been"
  },
  {
      "word": "built"
  },
  {
      "word": "column"
  },
  {
      "word": "details"
  },
  {
      "word": "elements"
  },
  {
      "word": "february"
  },
  {
      "word": "air"
  },
  {
      "word": "before"
  },
  {
      "word": "burning"
  },
  {
      "word": "come"
  },
  {
      "word": "determine"
  },
  {
      "word": "else"
  },
  {
      "word": "feel"
  },
  {
      "word": "all"
  },
  {
      "word": "began"
  },
  {
      "word": "business"
  },
  {
      "word": "common"
  },
  {
      "word": "developed"
  },
  {
      "word": "end"
  },
  {
      "word": "feeling"
  },
  {
      "word": "allow"
  },
  {
      "word": "begin"
  },
  {
      "word": "busy"
  },
  {
      "word": "company"
  },
  {
      "word": "dictionary"
  },
  {
      "word": "energy"
  },
  {
      "word": "feet"
  },
  {
      "word": "almost"
  },
  {
      "word": "behind"
  },
  {
      "word": "but"
  },
  {
      "word": "compare"
  },
  {
      "word": "did"
  },
  {
      "word": "engine"
  },
  {
      "word": "fell"
  },
  {
      "word": "alone"
  },
  {
      "word": "being"
  },
  {
      "word": "buy"
  },
  {
      "word": "complete"
  },
  {
      "word": "didn’t"
  },
  {
      "word": "england"
  },
  {
      "word": "felt"
  },
  {
      "word": "along"
  },
  {
      "word": "believe"
  },
  {
      "word": "by"
  },
  {
      "word": "compound"
  },
  {
      "word": "died"
  },
  {
      "word": "english"
  },
  {
      "word": "few"
  },
  {
      "word": "already"
  },
  {
      "word": "bell"
  },
  {
      "word": "calendar"
  },
  {
      "word": "conditions"
  },
  {
      "word": "difference"
  },
  {
      "word": "enjoy"
  },
  {
      "word": "field"
  },
  {
      "word": "also"
  },
  {
      "word": "belong"
  },
  {
      "word": "called"
  },
  {
      "word": "consider"
  },
  {
      "word": "different"
  },
  {
      "word": "enough"
  },
  {
      "word": "fight"
  },
  {
      "word": "although"
  },
  {
      "word": "below"
  },
  {
      "word": "came"
  },
  {
      "word": "consonant"
  },
  {
      "word": "difficult"
  },
  {
      "word": "entered"
  },
  {
      "word": "figure"
  },
  {
      "word": "always"
  },
  {
      "word": "beside"
  },
  {
      "word": "can"
  },
  {
      "word": "contain"
  },
  {
      "word": "direct"
  },
  {
      "word": "entire"
  },
  {
      "word": "filled"
  },
  {
      "word": "am"
  },
  {
      "word": "best"
  },
  {
      "word": "cannot"
  },
  {
      "word": "continued"
  },
  {
      "word": "direction"
  },
  {
      "word": "equal"
  },
  {
      "word": "finally"
  },
  {
      "word": "america"
  },
  {
      "word": "better"
  },
  {
      "word": "can’t"
  },
  {
      "word": "control"
  },
  {
      "word": "disappear"
  },
  {
      "word": "equation"
  },
  {
      "word": "find"
  },
  {
      "word": "among"
  },
  {
      "word": "between"
  },
  {
      "word": "capital"
  },
  {
      "word": "cook"
  },
  {
      "word": "discovered"
  },
  {
      "word": "especially"
  },
  {
      "word": "fine"
  },
  {
      "word": "amount"
  },
  {
      "word": "bicycle"
  },
  {
      "word": "captain"
  },
  {
      "word": "cool"
  },
  {
      "word": "distance"
  },
  {
      "word": "europe"
  },
  {
      "word": "fingers"
  },
  {
      "word": "an"
  },
  {
      "word": "big"
  },
  {
      "word": "car"
  },
  {
      "word": "copy"
  },
  {
      "word": "divided"
  },
  {
      "word": "even"
  },
  {
      "word": "finished"
  },
  {
      "word": "and"
  },
  {
      "word": "bill"
  },
  {
      "word": "care"
  },
  {
      "word": "corn"
  },
  {
      "word": "division"
  },
  {
      "word": "evening"
  },
  {
      "word": "fire"
  },
  {
      "word": "angle"
  },
  {
      "word": "birds"
  },
  {
      "word": "carefully"
  },
  {
      "word": "corner"
  },
  {
      "word": "do"
  },
  {
      "word": "ever"
  },
  {
      "word": "first"
  },
  {
      "word": "animal"
  },
  {
      "word": "bit"
  },
  {
      "word": "carry"
  },
  {
      "word": "correct"
  },
  {
      "word": "doctor"
  },
  {
      "word": "every"
  },
  {
      "word": "fish"
  },
  {
      "word": "another"
  },
  {
      "word": "black"
  },
  {
      "word": "case"
  },
  {
      "word": "cost"
  },
  {
      "word": "does"
  },
  {
      "word": "everyone"
  },
  {
      "word": "fit"
  },
  {
      "word": "answer"
  },
  {
      "word": "block"
  },
  {
      "word": "cat"
  },
  {
      "word": "cotton"
  },
  {
      "word": "doesn’t"
  },
  {
      "word": "everything"
  },
  {
      "word": "five"
  },
  {
      "word": "any"
  },
  {
      "word": "blood"
  },
  {
      "word": "catch"
  },
  {
      "word": "could"
  },
  {
      "word": "dog"
  },
  {
      "word": "exactly"
  },
  {
      "word": "flat"
  },
  {
      "word": "anything"
  },
  {
      "word": "blow"
  },
  {
      "word": "cattle"
  },
  {
      "word": "couldn’t"
  },
  {
      "word": "done"
  },
  {
      "word": "example"
  },
  {
      "word": "floor"
  },
  {
      "word": "appear"
  },
  {
      "word": "blue"
  },
  {
      "word": "caught"
  },
  {
      "word": "count"
  },
  {
      "word": "don’t"
  },
  {
      "word": "except"
  },
  {
      "word": "flow"
  },
  {
      "word": "apple"
  },
  {
      "word": "board"
  },
  {
      "word": "cause"
  },
  {
      "word": "country"
  },
  {
      "word": "door"
  },
  {
      "word": "exciting"
  },
  {
      "word": "flowers"
  },
  {
      "word": "are"
  },
  {
      "word": "boat"
  },
  {
      "word": "cells"
  },
  {
      "word": "exercise"
  },
  {
      "word": "fly"
  },
  {
      "word": "area"
  },
  {
      "word": "arms"
  },
  {
      "word": "centre"
  },
  {
      "word": "century"
  },
  {
      "word": "follow"
  },
  {
      "word": "food"
  },
  {
      "word": "happy"
  },
  {
      "word": "information"
  },
  {
      "word": "letter"
  },
  {
      "word": "mind"
  },
  {
      "word": "oil"
  },
  {
      "word": "popular"
  },
  {
      "word": "foot"
  },
  {
      "word": "hard"
  },
  {
      "word": "insects"
  },
  {
      "word": "level"
  },
  {
      "word": "mine"
  },
  {
      "word": "old"
  },
  {
      "word": "position"
  },
  {
      "word": "for"
  },
  {
      "word": "has"
  },
  {
      "word": "inside"
  },
  {
      "word": "library"
  },
  {
      "word": "minute"
  },
  {
      "word": "on"
  },
  {
      "word": "possible"
  },
  {
      "word": "force"
  },
  {
      "word": "hat"
  },
  {
      "word": "instead"
  },
  {
      "word": "lie"
  },
  {
      "word": "miss"
  },
  {
      "word": "once"
  },
  {
      "word": "possession"
  },
  {
      "word": "forest"
  },
  {
      "word": "have"
  },
  {
      "word": "instruments"
  },
  {
      "word": "life"
  },
  {
      "word": "modern"
  },
  {
      "word": "one"
  },
  {
      "word": "potatoes"
  },
  {
      "word": "form"
  },
  {
      "word": "he"
  },
  {
      "word": "interest"
  },
  {
      "word": "lifted"
  },
  {
      "word": "molecules"
  },
  {
      "word": "only"
  },
  {
      "word": "pounds"
  },
  {
      "word": "forward"
  },
  {
      "word": "head"
  },
  {
      "word": "interesting"
  },
  {
      "word": "light"
  },
  {
      "word": "moment"
  },
  {
      "word": "open"
  },
  {
      "word": "power"
  },
  {
      "word": "found"
  },
  {
      "word": "hear"
  },
  {
      "word": "into"
  },
  {
      "word": "like"
  },
  {
      "word": "money"
  },
  {
      "word": "opposite"
  },
  {
      "word": "practise"
  },
  {
      "word": "four"
  },
  {
      "word": "heard"
  },
  {
      "word": "iron"
  },
  {
      "word": "line"
  },
  {
      "word": "months"
  },
  {
      "word": "or"
  },
  {
      "word": "prepared"
  },
  {
      "word": "fraction"
  },
  {
      "word": "heart"
  },
  {
      "word": "is"
  },
  {
      "word": "list"
  },
  {
      "word": "moon"
  },
  {
      "word": "order"
  },
  {
      "word": "present"
  },
  {
      "word": "france"
  },
  {
      "word": "heat"
  },
  {
      "word": "island"
  },
  {
      "word": "listen"
  },
  {
      "word": "more"
  },
  {
      "word": "ordinary"
  },
  {
      "word": "president"
  },
  {
      "word": "free"
  },
  {
      "word": "heavy"
  },
  {
      "word": "isn’t"
  },
  {
      "word": "little"
  },
  {
      "word": "morning"
  },
  {
      "word": "other"
  },
  {
      "word": "pressure"
  },
  {
      "word": "french"
  },
  {
      "word": "height"
  },
  {
      "word": "it"
  },
  {
      "word": "live"
  },
  {
      "word": "most"
  },
  {
      "word": "our"
  },
  {
      "word": "pretty"
  },
  {
      "word": "fresh"
  },
  {
      "word": "held"
  },
  {
      "word": "it’s"
  },
  {
      "word": "located"
  },
  {
      "word": "mother"
  },
  {
      "word": "out"
  },
  {
      "word": "printed"
  },
  {
      "word": "friends"
  },
  {
      "word": "help"
  },
  {
      "word": "itself"
  },
  {
      "word": "long"
  },
  {
      "word": "mountains"
  },
  {
      "word": "outside"
  },
  {
      "word": "probably"
  },
  {
      "word": "from"
  },
  {
      "word": "her"
  },
  {
      "word": "japanese"
  },
  {
      "word": "look"
  },
  {
      "word": "mouth"
  },
  {
      "word": "over"
  },
  {
      "word": "problem"
  },
  {
      "word": "front"
  },
  {
      "word": "here"
  },
  {
      "word": "job"
  },
  {
      "word": "lost"
  },
  {
      "word": "move"
  },
  {
      "word": "own"
  },
  {
      "word": "process"
  },
  {
      "word": "fruit"
  },
  {
      "word": "high"
  },
  {
      "word": "joined"
  },
  {
      "word": "lot"
  },
  {
      "word": "movement"
  },
  {
      "word": "oxygen"
  },
  {
      "word": "produce"
  },
  {
      "word": "full"
  },
  {
      "word": "hill"
  },
  {
      "word": "jumped"
  },
  {
      "word": "loud"
  },
  {
      "word": "much"
  },
  {
      "word": "page"
  },
  {
      "word": "products"
  },
  {
      "word": "fun"
  },
  {
      "word": "him"
  },
  {
      "word": "just"
  },
  {
      "word": "love"
  },
  {
      "word": "music"
  },
  {
      "word": "paint"
  },
  {
      "word": "promise"
  },
  {
      "word": "game"
  },
  {
      "word": "himself"
  },
  {
      "word": "keep"
  },
  {
      "word": "low"
  },
  {
      "word": "must"
  },
  {
      "word": "pair"
  },
  {
      "word": "property"
  },
  {
      "word": "garden"
  },
  {
      "word": "his"
  },
  {
      "word": "kept"
  },
  {
      "word": "machine"
  },
  {
      "word": "my"
  },
  {
      "word": "paper"
  },
  {
      "word": "provide"
  },
  {
      "word": "gas"
  },
  {
      "word": "history"
  },
  {
      "word": "key"
  },
  {
      "word": "made"
  },
  {
      "word": "name"
  },
  {
      "word": "paragraph"
  },
  {
      "word": "pulled"
  },
  {
      "word": "gave"
  },
  {
      "word": "hit"
  },
  {
      "word": "killed"
  },
  {
      "word": "main"
  },
  {
      "word": "nation"
  },
  {
      "word": "park"
  },
  {
      "word": "purpose"
  },
  {
      "word": "general"
  },
  {
      "word": "hold"
  },
  {
      "word": "kind"
  },
  {
      "word": "major"
  },
  {
      "word": "natural"
  },
  {
      "word": "part"
  },
  {
      "word": "pushed"
  },
  {
      "word": "get"
  },
  {
      "word": "hole"
  },
  {
      "word": "king"
  },
  {
      "word": "make"
  },
  {
      "word": "naughty"
  },
  {
      "word": "particular"
  },
  {
      "word": "put"
  },
  {
      "word": "girl"
  },
  {
      "word": "home"
  },
  {
      "word": "knew"
  },
  {
      "word": "mall"
  },
  {
      "word": "near"
  },
  {
      "word": "party"
  },
  {
      "word": "quarter"
  },
  {
      "word": "give"
  },
  {
      "word": "hope"
  },
  {
      "word": "know"
  },
  {
      "word": "man"
  },
  {
      "word": "necessary"
  },
  {
      "word": "passed"
  },
  {
      "word": "questions"
  },
  {
      "word": "glass"
  },
  {
      "word": "horse"
  },
  {
      "word": "knowledge"
  },
  {
      "word": "many"
  },
  {
      "word": "need"
  },
  {
      "word": "past"
  },
  {
      "word": "quickly"
  },
  {
      "word": "go"
  },
  {
      "word": "hot"
  },
  {
      "word": "known"
  },
  {
      "word": "map"
  },
  {
      "word": "never"
  },
  {
      "word": "pattern"
  },
  {
      "word": "quiet"
  },
  {
      "word": "god"
  },
  {
      "word": "hours"
  },
  {
      "word": "lady"
  },
  {
      "word": "march"
  },
  {
      "word": "new"
  },
  {
      "word": "pay"
  },
  {
      "word": "quite"
  },
  {
      "word": "gold"
  },
  {
      "word": "house"
  },
  {
      "word": "lake"
  },
  {
      "word": "mark"
  },
  {
      "word": "next"
  },
  {
      "word": "peculiar"
  },
  {
      "word": "race"
  },
  {
      "word": "gone"
  },
  {
      "word": "how"
  },
  {
      "word": "land"
  },
  {
      "word": "match"
  },
  {
      "word": "night"
  },
  {
      "word": "people"
  },
  {
      "word": "radio"
  },
  {
      "word": "good"
  },
  {
      "word": "however"
  },
  {
      "word": "language"
  },
  {
      "word": "material"
  },
  {
      "word": "no"
  },
  {
      "word": "per"
  },
  {
      "word": "rain"
  },
  {
      "word": "got"
  },
  {
      "word": "huge"
  },
  {
      "word": "large"
  },
  {
      "word": "matter"
  },
  {
      "word": "north"
  },
  {
      "word": "perhaps"
  },
  {
      "word": "raised"
  },
  {
      "word": "government"
  },
  {
      "word": "human"
  },
  {
      "word": "last"
  },
  {
      "word": "may"
  },
  {
      "word": "northern"
  },
  {
      "word": "period"
  },
  {
      "word": "ran"
  },
  {
      "word": "grammar"
  },
  {
      "word": "hundred"
  },
  {
      "word": "late"
  },
  {
      "word": "maybe"
  },
  {
      "word": "nose"
  },
  {
      "word": "person"
  },
  {
      "word": "rather"
  },
  {
      "word": "grass"
  },
  {
      "word": "hunting"
  },
  {
      "word": "laughed"
  },
  {
      "word": "me"
  },
  {
      "word": "not"
  },
  {
      "word": "phrase"
  },
  {
      "word": "reached"
  },
  {
      "word": "great"
  },
  {
      "word": "ice"
  },
  {
      "word": "law"
  },
  {
      "word": "means"
  },
  {
      "word": "note"
  },
  {
      "word": "picked"
  },
  {
      "word": "read"
  },
  {
      "word": "greek"
  },
  {
      "word": "idea"
  },
  {
      "word": "lay"
  },
  {
      "word": "measure"
  },
  {
      "word": "nothing"
  },
  {
      "word": "picture"
  },
  {
      "word": "ready"
  },
  {
      "word": "green"
  },
  {
      "word": "if"
  },
  {
      "word": "lead"
  },
  {
      "word": "meat"
  },
  {
      "word": "notice"
  },
  {
      "word": "piece"
  },
  {
      "word": "real"
  },
  {
      "word": "grew"
  },
  {
      "word": "i’ll"
  },
  {
      "word": "learn"
  },
  {
      "word": "medicine"
  },
  {
      "word": "noun"
  },
  {
      "word": "place"
  },
  {
      "word": "reason"
  },
  {
      "word": "ground"
  },
  {
      "word": "imagine"
  },
  {
      "word": "least"
  },
  {
      "word": "meet"
  },
  {
      "word": "now"
  },
  {
      "word": "plains"
  },
  {
      "word": "received"
  },
  {
      "word": "group"
  },
  {
      "word": "important"
  },
  {
      "word": "leave"
  },
  {
      "word": "melody"
  },
  {
      "word": "number"
  },
  {
      "word": "plan"
  },
  {
      "word": "recent"
  },
  {
      "word": "grow"
  },
  {
      "word": "in"
  },
  {
      "word": "led"
  },
  {
      "word": "members"
  },
  {
      "word": "object"
  },
  {
      "word": "plane"
  },
  {
      "word": "record"
  },
  {
      "word": "guard"
  },
  {
      "word": "inches"
  },
  {
      "word": "left"
  },
  {
      "word": "men"
  },
  {
      "word": "observe"
  },
  {
      "word": "planets"
  },
  {
      "word": "red"
  },
  {
      "word": "guess"
  },
  {
      "word": "include"
  },
  {
      "word": "legs"
  },
  {
      "word": "mention"
  },
  {
      "word": "occasionally"
  },
  {
      "word": "plant"
  },
  {
      "word": "region"
  },
  {
      "word": "guide"
  },
  {
      "word": "increase"
  },
  {
      "word": "length"
  },
  {
      "word": "metal"
  },
  {
      "word": "ocean"
  },
  {
      "word": "play"
  },
  {
      "word": "regular"
  },
  {
      "word": "gun"
  },
  {
      "word": "indian"
  },
  {
      "word": "less"
  },
  {
      "word": "method"
  },
  {
      "word": "of"
  },
  {
      "word": "please"
  },
  {
      "word": "reign"
  },
  {
      "word": "had"
  },
  {
      "word": "indicate"
  },
  {
      "word": "let"
  },
  {
      "word": "middle"
  },
  {
      "word": "off"
  },
  {
      "word": "plural"
  },
  {
      "word": "remain"
  },
  {
      "word": "hair"
  },
  {
      "word": "industry"
  },
  {
      "word": "let’s"
  },
  {
      "word": "might"
  },
  {
      "word": "office"
  },
  {
      "word": "poem"
  },
  {
      "word": "remember"
  },
  {
      "word": "half"
  },
  {
      "word": "mile"
  },
  {
      "word": "often"
  },
  {
      "word": "point"
  },
  {
      "word": "repeated"
  },
  {
      "word": "hand"
  },
  {
      "word": "milk"
  },
  {
      "word": "oh"
  },
  {
      "word": "pole"
  },
  {
      "word": "report"
  },
  {
      "word": "happened"
  },
  {
      "word": "million"
  },
  {
      "word": "poor"
  },
  {
      "word": "represent"
  },
  {
      "word": "rest"
  },
  {
      "word": "result"
  },
  {
      "word": "sharp"
  },
  {
      "word": "space"
  },
  {
      "word": "swim"
  },
  {
      "word": "tools"
  },
  {
      "word": "wasn’t"
  },
  {
      "word": "work"
  },
  {
      "word": "return"
  },
  {
      "word": "she"
  },
  {
      "word": "speak"
  },
  {
      "word": "syllables"
  },
  {
      "word": "top"
  },
  {
      "word": "watch"
  },
  {
      "word": "workers"
  },
  {
      "word": "rhythm"
  },
  {
      "word": "ship"
  },
  {
      "word": "special"
  },
  {
      "word": "symbols"
  },
  {
      "word": "total"
  },
  {
      "word": "water"
  },
  {
      "word": "world"
  },
  {
      "word": "rich"
  },
  {
      "word": "shoes"
  },
  {
      "word": "speed"
  },
  {
      "word": "system"
  },
  {
      "word": "touch"
  },
  {
      "word": "waves"
  },
  {
      "word": "would"
  },
  {
      "word": "ride"
  },
  {
      "word": "shop"
  },
  {
      "word": "spell"
  },
  {
      "word": "table"
  },
  {
      "word": "toward"
  },
  {
      "word": "way"
  },
  {
      "word": "wouldn’t"
  },
  {
      "word": "right"
  },
  {
      "word": "short"
  },
  {
      "word": "spot"
  },
  {
      "word": "take"
  },
  {
      "word": "town"
  },
  {
      "word": "we"
  },
  {
      "word": "write"
  },
  {
      "word": "ring"
  },
  {
      "word": "should"
  },
  {
      "word": "spread"
  },
  {
      "word": "talk"
  },
  {
      "word": "track"
  },
  {
      "word": "wear"
  },
  {
      "word": "written"
  },
  {
      "word": "rise"
  },
  {
      "word": "shoulder"
  },
  {
      "word": "spring"
  },
  {
      "word": "tall"
  },
  {
      "word": "trade"
  },
  {
      "word": "weather"
  },
  {
      "word": "wrong"
  },
  {
      "word": "river"
  },
  {
      "word": "shouted"
  },
  {
      "word": "square"
  },
  {
      "word": "teacher"
  },
  {
      "word": "train"
  },
  {
      "word": "week"
  },
  {
      "word": "wrote"
  },
  {
      "word": "rolled"
  },
  {
      "word": "show"
  },
  {
      "word": "stand"
  },
  {
      "word": "team"
  },
  {
      "word": "travel"
  },
  {
      "word": "weight"
  },
  {
      "word": "yard"
  },
  {
      "word": "room"
  },
  {
      "word": "shown"
  },
  {
      "word": "stars"
  },
  {
      "word": "tell"
  },
  {
      "word": "tree"
  },
  {
      "word": "we’ll"
  },
  {
      "word": "years"
  },
  {
      "word": "root"
  },
  {
      "word": "side"
  },
  {
      "word": "start"
  },
  {
      "word": "temperature"
  },
  {
      "word": "triangle"
  },
  {
      "word": "well"
  },
  {
      "word": "yellow"
  },
  {
      "word": "rope"
  },
  {
      "word": "sight"
  },
  {
      "word": "state"
  },
  {
      "word": "ten"
  },
  {
      "word": "trip"
  },
  {
      "word": "went"
  },
  {
      "word": "yes"
  },
  {
      "word": "rose"
  },
  {
      "word": "sign"
  },
  {
      "word": "statement"
  },
  {
      "word": "terms"
  },
  {
      "word": "trouble"
  },
  {
      "word": "were"
  },
  {
      "word": "yet"
  },
  {
      "word": "round"
  },
  {
      "word": "silent"
  },
  {
      "word": "stay"
  },
  {
      "word": "test"
  },
  {
      "word": "truck"
  },
  {
      "word": "west"
  },
  {
      "word": "you"
  },
  {
      "word": "row"
  },
  {
      "word": "similar"
  },
  {
      "word": "steel"
  },
  {
      "word": "than"
  },
  {
      "word": "true"
  },
  {
      "word": "western"
  },
  {
      "word": "young"
  },
  {
      "word": "rule"
  },
  {
      "word": "simple"
  },
  {
      "word": "step"
  },
  {
      "word": "that"
  },
  {
      "word": "try"
  },
  {
      "word": "what"
  },
  {
      "word": "your"
  },
  {
      "word": "run"
  },
  {
      "word": "since"
  },
  {
      "word": "stick"
  },
  {
      "word": "the"
  },
  {
      "word": "tube"
  },
  {
      "word": "wheels"
  },
  {
      "word": "you’re"
  },
  {
      "word": "safe"
  },
  {
      "word": "sing"
  },
  {
      "word": "still"
  },
  {
      "word": "their"
  },
  {
      "word": "turn"
  },
  {
      "word": "when"
  },
  {
      "word": "yourself"
  },
  {
      "word": "said"
  },
  {
      "word": "single"
  },
  {
      "word": "stone"
  },
  {
      "word": "them"
  },
  {
      "word": "two"
  },
  {
      "word": "where"
  },
  {
      "word": "sail"
  },
  {
      "word": "sir"
  },
  {
      "word": "stood"
  },
  {
      "word": "themselves"
  },
  {
      "word": "type"
  },
  {
      "word": "whether"
  },
  {
      "word": "same"
  },
  {
      "word": "sister"
  },
  {
      "word": "stop"
  },
  {
      "word": "then"
  },
  {
      "word": "uncle"
  },
  {
      "word": "which"
  },
  {
      "word": "sand"
  },
  {
      "word": "sit"
  },
  {
      "word": "store"
  },
  {
      "word": "there"
  },
  {
      "word": "under"
  },
  {
      "word": "while"
  },
  {
      "word": "sat"
  },
  {
      "word": "site"
  },
  {
      "word": "story"
  },
  {
      "word": "therefore"
  },
  {
      "word": "underline"
  },
  {
      "word": "white"
  },
  {
      "word": "save"
  },
  {
      "word": "six"
  },
  {
      "word": "straight"
  },
  {
      "word": "these"
  },
  {
      "word": "understand"
  },
  {
      "word": "who"
  },
  {
      "word": "saw"
  },
  {
      "word": "size"
  },
  {
      "word": "strange"
  },
  {
      "word": "they"
  },
  {
      "word": "unit"
  },
  {
      "word": "whole"
  },
  {
      "word": "say"
  },
  {
      "word": "skin"
  },
  {
      "word": "stream"
  },
  {
      "word": "they’re"
  },
  {
      "word": "until"
  },
  {
      "word": "whose"
  },
  {
      "word": "scale"
  },
  {
      "word": "sky"
  },
  {
      "word": "strength"
  },
  {
      "word": "thick"
  },
  {
      "word": "up"
  },
  {
      "word": "why"
  },
  {
      "word": "school"
  },
  {
      "word": "sleep"
  },
  {
      "word": "street"
  },
  {
      "word": "thin"
  },
  {
      "word": "upon"
  },
  {
      "word": "wide"
  },
  {
      "word": "science"
  },
  {
      "word": "slowly"
  },
  {
      "word": "stretched"
  },
  {
      "word": "things"
  },
  {
      "word": "us"
  },
  {
      "word": "wife"
  },
  {
      "word": "scientists"
  },
  {
      "word": "small"
  },
  {
      "word": "string"
  },
  {
      "word": "think"
  },
  {
      "word": "use"
  },
  {
      "word": "wild"
  },
  {
      "word": "score"
  },
  {
      "word": "smell"
  },
  {
      "word": "strong"
  },
  {
      "word": "third"
  },
  {
      "word": "usually"
  },
  {
      "word": "will"
  },
  {
      "word": "sea"
  },
  {
      "word": "smiled"
  },
  {
      "word": "students"
  },
  {
      "word": "this"
  },
  {
      "word": "valley"
  },
  {
      "word": "win"
  },
  {
      "word": "seat"
  },
  {
      "word": "snow"
  },
  {
      "word": "study"
  },
  {
      "word": "those"
  },
  {
      "word": "value"
  },
  {
      "word": "wind"
  },
  {
      "word": "second"
  },
  {
      "word": "so"
  },
  {
      "word": "subject"
  },
  {
      "word": "though"
  },
  {
      "word": "various"
  },
  {
      "word": "window"
  },
  {
      "word": "section"
  },
  {
      "word": "soft"
  },
  {
      "word": "substances"
  },
  {
      "word": "thought"
  },
  {
      "word": "verb"
  },
  {
      "word": "wings"
  },
  {
      "word": "see"
  },
  {
      "word": "soil"
  },
  {
      "word": "such"
  },
  {
      "word": "thousands"
  },
  {
      "word": "very"
  },
  {
      "word": "winter"
  },
  {
      "word": "seeds"
  },
  {
      "word": "soldiers"
  },
  {
      "word": "suddenly"
  },
  {
      "word": "three"
  },
  {
      "word": "view"
  },
  {
      "word": "wire"
  },
  {
      "word": "seem"
  },
  {
      "word": "solution"
  },
  {
      "word": "suffix"
  },
  {
      "word": "through"
  },
  {
      "word": "village"
  },
  {
      "word": "wish"
  },
  {
      "word": "seen"
  },
  {
      "word": "solve"
  },
  {
      "word": "sugar"
  },
  {
      "word": "thus"
  },
  {
      "word": "visit"
  },
  {
      "word": "with"
  },
  {
      "word": "sell"
  },
  {
      "word": "some"
  },
  {
      "word": "suggested"
  },
  {
      "word": "tied"
  },
  {
      "word": "voice"
  },
  {
      "word": "within"
  },
  {
      "word": "send"
  },
  {
      "word": "someone"
  },
  {
      "word": "sum"
  },
  {
      "word": "time"
  },
  {
      "word": "vowel"
  },
  {
      "word": "without"
  },
  {
      "word": "sense"
  },
  {
      "word": "something"
  },
  {
      "word": "summer"
  },
  {
      "word": "tiny"
  },
  {
      "word": "wait"
  },
  {
      "word": "woman"
  },
  {
      "word": "sent"
  },
  {
      "word": "sometimes"
  },
  {
      "word": "sun"
  },
  {
      "word": "to"
  },
  {
      "word": "walk"
  },
  {
      "word": "women"
  },
  {
      "word": "sentence"
  },
  {
      "word": "son"
  },
  {
      "word": "supply"
  },
  {
      "word": "today"
  },
  {
      "word": "wall"
  },
  {
      "word": "wonder"
  },
  {
      "word": "separate"
  },
  {
      "word": "song"
  },
  {
      "word": "suppose"
  },
  {
      "word": "together"
  },
  {
      "word": "want"
  },
  {
      "word": "won’t"
  },
  {
      "word": "serve"
  },
  {
      "word": "soon"
  },
  {
      "word": "sure"
  },
  {
      "word": "told"
  },
  {
      "word": "war"
  },
  {
      "word": "wood"
  },
  {
      "word": "set"
  },
  {
      "word": "sound"
  },
  {
      "word": "surface"
  },
  {
      "word": "tone"
  },
  {
      "word": "warm"
  },
  {
      "word": "words"
  },
  {
      "word": "settled"
  },
  {
      "word": "south"
  },
  {
      "word": "surprise"
  },
  {
      "word": "too"
  },
  {
      "word": "seven"
  },
  {
      "word": "southern"
  },
  {
      "word": "took"
  },
  {
      "word": "several"
  },
  {
      "word": "shall"
  },
  {
      "word": "shape"
  },
  {
      "word": "absence"
  },
  {
      "word": "accommodate"
  },
  {
      "word": "achieve"
  },
  {
      "word": "acquire"
  },
  {
      "word": "advice"
  },
  {
      "word": "apparent"
  },
  {
      "word": "arctic"
  },
  {
      "word": "argument"
  },
  {
      "word": "atheist"
  },
  {
      "word": "athlete"
  },
  {
      "word": "awful"
  },
  {
      "word": "becoming"
  },
  {
      "word": "beginning"
  },
  {
      "word": "category"
  },
  {
      "word": "ceiling"
  },
  {
      "word": "cemetery"
  },
  {
      "word": "changeable"
  },
  {
      "word": "collectible"
  },
  {
      "word": "coming"
  },
  {
      "word": "committed"
  },
  {
      "word": "conscience"
  },
  {
      "word": "conscious"
  },
  {
      "word": "consensus"
  },
  {
      "word": "coolly"
  },
  {
      "word": "deceive"
  },
  {
      "word": "definitely"
  },
  {
      "word": "desperate"
  },
  {
      "word": "dilemma"
  },
  {
      "word": "disappoint"
  },
  {
      "word": "disastrous"
  },
  {
      "word": "discipline"
  },
  {
      "word": "embarrassment"
  },
  {
      "word": "equipment"
  },
  {
      "word": "exceed"
  },
  {
      "word": "exhilarate"
  },
  {
      "word": "existence"
  },
  {
      "word": "fascinating"
  },
  {
      "word": "fiery"
  },
  {
      "word": "fluorescent"
  },
  {
      "word": "foreign"
  },
  {
      "word": "friend"
  },
  {
      "word": "gauge"
  },
  {
      "word": "grateful"
  },
  {
      "word": "guarantee"
  },
  {
      "word": "guidance"
  },
  {
      "word": "harass"
  },
  {
      "word": "hierarchy"
  },
  {
      "word": "humorous"
  },
  {
      "word": "ignorance"
  },
  {
      "word": "immediately"
  },
  {
      "word": "independent"
  },
  {
      "word": "indispensable"
  },
  {
      "word": "inoculate"
  },
  {
      "word": "intelligence"
  },
  {
      "word": "jealous"
  },
  {
      "word": "jewelry"
  },
  {
      "word": "judgment"
  },
  {
      "word": "leisure"
  },
  {
      "word": "liaison"
  },
  {
      "word": "license"
  },
  {
      "word": "maintenance"
  },
  {
      "word": "mathematics"
  },
  {
      "word": "medieval"
  },
  {
      "word": "memento"
  },
  {
      "word": "millennium"
  },
  {
      "word": "miniature"
  },
  {
      "word": "miniscule"
  },
  {
      "word": "mischievous"
  },
  {
      "word": "misspell"
  },
  {
      "word": "mysterious"
  },
  {
      "word": "neighbor"
  },
  {
      "word": "noticeable"
  },
  {
      "word": "nuclear"
  },
  {
      "word": "occurrence"
  },
  {
      "word": "omission"
  },
  {
      "word": "original"
  },
  {
      "word": "pastime"
  },
  {
      "word": "perceive"
  },
  {
      "word": "perseverance"
  },
  {
      "word": "personally"
  },
  {
      "word": "personnel"
  },
  {
      "word": "playwright"
  },
  {
      "word": "precede"
  },
  {
      "word": "prejudice"
  },
  {
      "word": "presence"
  },
  {
      "word": "privilege"
  },
  {
      "word": "professor"
  },
  {
      "word": "pronunciation"
  },
  {
      "word": "proof"
  },
  {
      "word": "publicly"
  },
  {
      "word": "questionnaire"
  },
  {
      "word": "quit"
  },
  {
      "word": "really"
  },
  {
      "word": "recommend"
  },
  {
      "word": "reference"
  },
  {
      "word": "referred"
  },
  {
      "word": "relevant"
  },
  {
      "word": "religious"
  },
  {
      "word": "repetition"
  },
  {
      "word": "restaurant"
  },
  {
      "word": "rhyme"
  },
  {
      "word": "scissors"
  },
  {
      "word": "secretary"
  },
  {
      "word": "sergeant"
  },
  {
      "word": "shining"
  },
  {
      "word": "sincerely"
  },
  {
      "word": "speech"
  },
  {
      "word": "successful"
  },
  {
      "word": "supersede"
  },
  {
      "word": "surely"
  },
  {
      "word": "thorough"
  },
  {
      "word": "truly"
  },
  {
      "word": "twelfth"
  },
  {
      "word": "tyranny"
  },
  {
      "word": "using"
  },
  {
      "word": "vacuum"
  },
  {
      "word": "weird"
  },
  {
      "word": "withhold"
  },
  {
      "word": "writing"
  }
]

const seedFunction = function(obj) {
  // let wordList = arr.map((word) => {
  //   return {word: word};
  // })
  // console.log(wordList);
  db.Words.insertMany(obj)
    .then((res) => {
      console.log('Success')
    })
    .catch((err) => {
      console.log(err);
      console.log('failed')
    })
}

seedFunction(words);