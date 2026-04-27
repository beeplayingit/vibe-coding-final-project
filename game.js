// ============================================
// QUOTES DATABASE
// ============================================
const QUOTES_DATABASE = {
    movies: {
        prestige_unlock: 0,
        quotes: [
            "You can't handle the truth",
            "Houston we have a problem",
            "I'll be back",
            "May the Force be with you",
            "You're gonna need a bigger boat",
            "Here's looking at you kid",
            "What we've got here is failure to communicate",
            "I'm Batman",
            "The first rule of Fight Club is you do not talk about Fight Club",
            "I am your father",
            "Nobody puts Baby in a corner",
            "There's no place like home",
            "E.T. phone home",
            "It's alive",
            "Why so serious",
            "To infinity and beyond",
            "You've got to be kidding me",
            "Show me the money",
            "I see dead people",
            "They call it a Royale with Cheese",
            "Leave the gun take the cannoli",
            "Here's Johnny",
            "That's all folks",
            "The stuff that dreams are made of",
            "You talking to me",
            "I'll have what she's having",
            "Just keep swimming",
            "Frankly my dear I don't give a damn",
            "Go ahead make my day",
            "I love the smell of napalm in the morning",
            "You shall not pass",
            "One does not simply walk into Mordor",
            "I am Groot",
            "The night king is coming",
            "Winter is coming"
        ]
    },
    books: {
        prestige_unlock: 1,
        quotes: [
            "It was the best of times it was the worst of times",
            "Call me Ishmael",
            "You don't know about me without you have read a book called The Adventures of Tom Sawyer",
            "It is a truth universally acknowledged that a single man in possession of a good fortune must be in want of a wife",
            "Once upon a time and a very good time it was there was a moocow coming down along the road",
            "The past is a foreign country they do things differently there",
            "Mother died today or maybe yesterday I can't be sure",
            "It was a pleasure to burn",
            "All happy families are alike every unhappy family is unhappy in its own way",
            "Whether I shall turn out to be the hero of my own life depends on these pages",
            "Someone must have slandered Josef K for without having done anything wrong he found himself transformed in his bed into a monstrous bug",
            "It is a dark time for the Rebellion",
            "The snow in the mountains is melting and Gondor has need of Rohan",
            "A boy who lived under the stairs would change everything",
            "The year that trembled on the edge of a new decade brought with it a great change"
        ]
    },
    speeches: {
        prestige_unlock: 2,
        quotes: [
            "I have a dream that one day this nation will rise up",
            "Four score and seven years ago our fathers brought forth",
            "Ask not what your country can do for you ask what you can do for your country",
            "The only thing we have to fear is fear itself",
            "Give me liberty or give me death",
            "We choose to go to the moon",
            "That's one small step for a man one giant leap for mankind",
            "I came I saw I conquered",
            "Et tu Brute",
            "To be or not to be that is the question",
            "All men are created equal",
            "We hold these truths to be self evident",
            "The unexamined life is not worth living",
            "I think therefore I am",
            "Knowledge is power"
        ]
    },
    songs: {
        prestige_unlock: 3,
        quotes: [
            "We will we will rock you",
            "Don't stop believing hold on to that feeling",
            "Imagine all the people sharing all the world",
            "I am just a poor boy though my story's seldom told",
            "All we are is dust in the wind",
            "Is this the real life is this just fantasy",
            "Hotel California you can check out but you can never leave",
            "Baby love my baby love I need you",
            "Stayin alive stayin alive at disco",
            "I want to hold your hand",
            "Let it be let it be let it be",
            "Twist and shout come on",
            "Yesterday all my troubles seemed so far away",
            "Hey Jude don't make it bad",
            "Come together right now over me"
        ]
    },
    pop_culture: {
        prestige_unlock: 4,
        quotes: [
            "That's hot",
            "I'm kind of a big deal",
            "You miss one hundred percent of the shots you don't take",
            "Did you ever know that you're my hero",
            "I'm not a regular mom I'm a cool mom",
            "Stop trying to make fetch happen",
            "Bye Felicia",
            "These pretzels are making me thirsty",
            "No soup for you",
            "The Dude abides",
            "This is fine",
            "Big mood",
            "No cap",
            "I'm living my best life",
            "That hits different"
        ]
    },
    nature: {
        prestige_unlock: 5,
        quotes: [
            "Look at the trees how they reach toward the sky",
            "The mountains are calling and I must go",
            "There is nothing like the real thing baby",
            "The desert has its own beauty and mystery",
            "In every walk with nature one receives far more than he seeks",
            "The wind whispers through the canyon walls",
            "Sunlight dances on the water surface",
            "The river flows endlessly toward the ocean",
            "Stars fill the night sky with their ancient light",
            "The forest stands tall and proud",
            "Rain brings life to the thirsty earth",
            "Snow covers the world in peaceful silence",
            "Thunder rolls across the distant horizon",
            "The waves crash upon the rocky shore",
            "Morning breaks with golden light"
        ]
    }
};

// ============================================
// SHOP UPGRADES CONFIGURATION
// ============================================
const SHOP_UPGRADES = {
    multipliers: [
        { id: 'mult1', name: '1.2x Multiplier', description: 'Earn 1.2x characters', cost: 50, effect: 0.2, max_purchased: Infinity },
        { id: 'mult2', name: '1.5x Multiplier', description: 'Earn 1.5x characters', cost: 200, effect: 0.5, max_purchased: Infinity },
        { id: 'mult3', name: '2.0x Multiplier', description: 'Earn 2.0x characters', cost: 500, effect: 1.0, max_purchased: Infinity },
        { id: 'mult4', name: '3.0x Multiplier', description: 'Earn 3.0x characters', cost: 1500, effect: 2.0, max_purchased: Infinity },
    ],
    'auto-typers': [
        { id: 'auto1', name: '5 WPM Auto', description: 'Types 5 words per minute passively', cost: 100, speed_wpm: 5, max_purchased: Infinity },
        { id: 'auto2', name: '10 WPM Auto', description: 'Types 10 words per minute passively', cost: 300, speed_wpm: 10, max_purchased: Infinity },
        { id: 'auto3', name: '15 WPM Auto', description: 'Types 15 words per minute passively', cost: 600, speed_wpm: 15, max_purchased: Infinity },
        { id: 'auto4', name: '20 WPM Auto', description: 'Types 20 words per minute passively', cost: 1000, speed_wpm: 20, max_purchased: Infinity },
        { id: 'auto5', name: '30 WPM Auto', description: 'Types 30 words per minute passively', cost: 1800, speed_wpm: 30, max_purchased: Infinity },
        { id: 'auto6', name: '50 WPM Auto', description: 'Types 50 words per minute passively', cost: 3000, speed_wpm: 50, max_purchased: Infinity },
    ],
    'speed-boosters': [
        { id: 'speed1', name: 'Speed +10%', description: 'Bonus for fast typing', cost: 75, effect: 0.1, max_purchased: Infinity },
        { id: 'speed2', name: 'Speed +25%', description: 'Bigger bonus for speed', cost: 250, effect: 0.25, max_purchased: Infinity },
        { id: 'speed3', name: 'Speed +50%', description: 'Major speed bonus', cost: 600, effect: 0.5, max_purchased: Infinity },
    ]
};

// ============================================
// GAME STATE CLASS
// ============================================
class GameState {
    constructor() {
        this.characters = 0;
        this.prestige = 0;
        this.prestige_multiplier = 1.0; // Permanent bonus
        this.upgrades = {}; // { 'mult1': 2, 'auto1': 1, ... }
        this.unlocked_categories = new Set(['movies']);
        this.current_quote = '';
        this.current_category = 'movies';
        this.start_time = null;
    }

    load_from_storage() {
        const saved = localStorage.getItem('vibe_typing_save');
        if (saved) {
            const data = JSON.parse(saved);
            this.characters = data.characters || 0;
            this.prestige = data.prestige || 0;
            this.prestige_multiplier = data.prestige_multiplier || 1.0;
            this.upgrades = data.upgrades || {};
            this.unlocked_categories = new Set(data.unlocked_categories || ['movies']);
            this.current_category = data.current_category || 'movies';
        }
    }

    save_to_storage() {
        const data = {
            characters: this.characters,
            prestige: this.prestige,
            prestige_multiplier: this.prestige_multiplier,
            upgrades: this.upgrades,
            unlocked_categories: Array.from(this.unlocked_categories),
            current_category: this.current_category,
        };
        localStorage.setItem('vibe_typing_save', JSON.stringify(data));
    }

    get_current_multiplier() {
        let multiplier = this.prestige_multiplier;
        
        // Add multiplier upgrades
        for (const [upgrade_id, count] of Object.entries(this.upgrades)) {
            for (const category in SHOP_UPGRADES) {
                const upgrade = SHOP_UPGRADES[category].find(u => u.id === upgrade_id);
                if (upgrade && upgrade_id.startsWith('mult')) {
                    multiplier += upgrade.effect * count;
                }
            }
        }
        
        return multiplier;
    }

    get_auto_typer_percentage() {
        let auto_percent = 0;
        
        // Add auto-typer upgrades
        for (const [upgrade_id, count] of Object.entries(this.upgrades)) {
            const upgrade = SHOP_UPGRADES['auto-typers'].find(u => u.id === upgrade_id);
            if (upgrade) {
                auto_percent += upgrade.effect * count;
            }
        }
        
        return Math.min(auto_percent, 1.0); // Cap at 100%
    }

    get_speed_bonus_percentage() {
        let speed_bonus = 0;
        
        // Add speed upgrades
        for (const [upgrade_id, count] of Object.entries(this.upgrades)) {
            const upgrade = SHOP_UPGRADES['speed-boosters'].find(u => u.id === upgrade_id);
            if (upgrade) {
                speed_bonus += upgrade.effect * count;
            }
        }
        
        return speed_bonus;
    }

    get_passive_income_per_second() {
        let total_chars_per_sec = 0;
        
        // Add auto-typer income (WPM to characters per second)
        // 1 WPM = 5 characters per minute = 5/60 chars per second
        for (const [upgrade_id, count] of Object.entries(this.upgrades)) {
            const upgrade = SHOP_UPGRADES['auto-typers'].find(u => u.id === upgrade_id);
            if (upgrade) {
                const chars_per_minute = upgrade.speed_wpm * 5; // 1 word = ~5 chars
                const chars_per_second = chars_per_minute / 60;
                total_chars_per_sec += chars_per_second * count;
            }
        }
        
        return total_chars_per_sec;
    }

    get_auto_typer_list() {
        const auto_typers = [];
        
        for (const [upgrade_id, count] of Object.entries(this.upgrades)) {
            const upgrade = SHOP_UPGRADES['auto-typers'].find(u => u.id === upgrade_id);
            if (upgrade && count > 0) {
                auto_typers.push({
                    id: upgrade_id,
                    name: upgrade.name,
                    speed_wpm: upgrade.speed_wpm,
                    count: count
                });
            }
        }
        
        return auto_typers;
    }

    calculate_reward(completion_time_seconds) {
        const base_characters = this.current_quote.length; // Award characters based on quote length
        
        // Speed bonus (faster = more bonus, cap at 2 minutes)
        const max_speed_bonus_time = 120; // 2 minutes
        const speed_factor = Math.max(0.5, 1 + (max_speed_bonus_time - Math.min(completion_time_seconds, max_speed_bonus_time)) / max_speed_bonus_time);
        const speed_multiplier = 1 + (speed_factor - 1) * (1 + this.get_speed_bonus_percentage());
        
        // Total multiplier
        const total_multiplier = this.get_current_multiplier();
        
        return Math.floor(base_characters * speed_multiplier * total_multiplier);
    }

    purchase_upgrade(upgrade_id) {
        let upgrade_obj = null;
        
        for (const category in SHOP_UPGRADES) {
            const found = SHOP_UPGRADES[category].find(u => u.id === upgrade_id);
            if (found) {
                upgrade_obj = found;
                break;
            }
        }
        
        if (!upgrade_obj) return false;
        if (this.characters < upgrade_obj.cost) return false;
        
        const current_count = this.upgrades[upgrade_id] || 0;
        if (current_count >= upgrade_obj.max_purchased) return false;
        
        this.characters -= upgrade_obj.cost;
        this.upgrades[upgrade_id] = current_count + 1;
        this.save_to_storage();
        return true;
    }

    prestige_reset() {
        const new_prestige_level = Math.floor(Math.sqrt(this.characters / 100)) + 1;
        this.prestige += new_prestige_level;
        this.prestige_multiplier += 0.05 * new_prestige_level; // Permanent bonus
        
        // Unlock new categories
        for (const category in QUOTES_DATABASE) {
            if (QUOTES_DATABASE[category].prestige_unlock <= this.prestige) {
                this.unlocked_categories.add(category);
            }
        }
        
        // Reset progress
        this.characters = 0;
        this.upgrades = {};
        this.save_to_storage();
    }

    get_random_quote() {
        const categories = Array.from(this.unlocked_categories);
        this.current_category = categories[Math.floor(Math.random() * categories.length)];
        const quotes = QUOTES_DATABASE[this.current_category].quotes;
        this.current_quote = quotes[Math.floor(Math.random() * quotes.length)];
        return this.current_quote;
    }
}

// ============================================
// GLOBAL VARIABLES
// ============================================
let game = new GameState();
let current_tab = 'multipliers';
let last_passive_income_time = Date.now();
let auto_typer_animations = {}; // Track animation progress for each auto-typer

// ============================================
// PASSIVE INCOME GAME LOOP
// ============================================
function game_loop() {
    const now = Date.now();
    const elapsed_ms = now - last_passive_income_time;
    const elapsed_sec = elapsed_ms / 1000;
    
    if (elapsed_sec >= 0.1) { // Update every 100ms
        const passive_per_sec = game.get_passive_income_per_second();
        const passive_to_earn = passive_per_sec * elapsed_sec;
        
        if (passive_to_earn > 0) {
            game.characters += passive_to_earn;
            game.characters = Math.round(game.characters);
            game.save_to_storage();
            update_display();
        }
        
        last_passive_income_time = now;
    }
    
    // Update auto-typer progress bars
    const auto_typers = game.get_auto_typer_list();
    for (const typer of auto_typers) {
        if (!auto_typer_animations[typer.id]) {
            auto_typer_animations[typer.id] = 0;
        }
        
        // Progress moves based on WPM (faster WPM = faster progress animation)
        const progress_increment = (typer.speed_wpm / 50) * 2; // Normalized to 50 WPM
        auto_typer_animations[typer.id] = (auto_typer_animations[typer.id] + progress_increment) % 100;
        
        const progress_bar = document.getElementById(`progress-${typer.id}`);
        if (progress_bar) {
            progress_bar.style.width = auto_typer_animations[typer.id] + '%';
        }
    }
    
    requestAnimationFrame(game_loop);
}

// ============================================
// DOM HELPER FUNCTIONS
// ============================================
function update_display() {
    document.getElementById('characterCount').textContent = Math.round(game.characters);
    document.getElementById('multiplierDisplay').textContent = game.get_current_multiplier().toFixed(2) + 'x';
    document.getElementById('prestigeDisplay').textContent = game.prestige;
    update_upgrades_list();
    update_auto_typer_display();
}

function update_upgrades_list() {
    const container = document.getElementById('upgradesList');
    container.innerHTML = '';
    
    if (Object.keys(game.upgrades).length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1 / -1;">No upgrades purchased yet</p>';
        return;
    }
    
    for (const [upgrade_id, count] of Object.entries(game.upgrades)) {
        let upgrade_obj = null;
        for (const category in SHOP_UPGRADES) {
            const found = SHOP_UPGRADES[category].find(u => u.id === upgrade_id);
            if (found) {
                upgrade_obj = found;
                break;
            }
        }
        
        // Don't display auto-typers in this section (they're in the side panel)
        if (upgrade_obj && !upgrade_id.startsWith('auto')) {
            const div = document.createElement('div');
            div.className = 'upgrade-item';
            div.innerHTML = `
                <div class="upgrade-item-name">${upgrade_obj.name}</div>
                <div class="upgrade-item-level">x${count}</div>
            `;
            container.appendChild(div);
        }
    }
}

function update_auto_typer_display() {
    const container = document.getElementById('autoTypersList');
    const passive_per_sec = game.get_passive_income_per_second();
    document.getElementById('passiveIncomePerSec').textContent = passive_per_sec.toFixed(2);
    
    const auto_typers = game.get_auto_typer_list();
    container.innerHTML = '';
    
    if (auto_typers.length === 0) {
        container.innerHTML = '<div style="color: var(--text-muted); text-align: center; font-size: 12px; padding: 10px;">No auto-typers yet</div>';
        return;
    }
    
    for (const typer of auto_typers) {
        const div = document.createElement('div');
        div.className = 'auto-typer-item';
        
        // Get a random quote for display
        const categories = Array.from(game.unlocked_categories);
        const random_category = categories[Math.floor(Math.random() * categories.length)];
        const quotes = QUOTES_DATABASE[random_category].quotes;
        const display_quote = quotes[Math.floor(Math.random() * quotes.length)].substring(0, 30) + '...';
        
        div.innerHTML = `
            <div class="auto-typer-speed">${typer.speed_wpm} WPM x${typer.count}</div>
            <div class="auto-typer-quotes">${display_quote}</div>
            <div class="auto-typer-progress">
                <div class="auto-typer-progress-bar" id="progress-${typer.id}"></div>
            </div>
        `;
        
        container.appendChild(div);
    }
}

function render_shop() {
    const content = document.getElementById('shopContent');
    const upgrades = SHOP_UPGRADES[current_tab] || [];
    
    content.innerHTML = '';
    
    for (const upgrade of upgrades) {
        const count = game.upgrades[upgrade.id] || 0;
        const can_afford = game.characters >= upgrade.cost;
        const is_owned = count > 0;
        const at_max = count >= upgrade.max_purchased;
        
        const div = document.createElement('div');
        div.className = `upgrade-card ${is_owned ? 'owned' : ''}`;
        
        let button_text = at_max ? 'Max Owned' : (is_owned ? `Own (${count})` : 'Buy');
        let button_disabled = !can_afford || at_max;
        
        div.innerHTML = `
            <div class="upgrade-name">${upgrade.name}</div>
            <div class="upgrade-description">${upgrade.description}</div>
            <div class="upgrade-cost ${can_afford ? '' : 'unaffordable'}">${upgrade.cost} characters</div>
            <button class="upgrade-button ${button_disabled ? '' : ''}" ${button_disabled ? 'disabled' : ''} onclick="purchase_upgrade_click('${upgrade.id}')">
                ${button_text}
            </button>
        `;
        
        content.appendChild(div);
    }
}

function purchase_upgrade_click(upgrade_id) {
    if (game.purchase_upgrade(upgrade_id)) {
        render_shop();
        update_display();
    }
}

function open_shop() {
    document.getElementById('shopModal').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
    render_shop();
}

function close_shop() {
    document.getElementById('shopModal').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
}

function open_prestige() {
    const new_prestige_gain = Math.floor(Math.sqrt(game.characters / 100)) + 1;
    const bonus_per = 0.05 * new_prestige_gain;
    
    document.getElementById('prestigeCurrentCharacters').textContent = game.characters;
    document.getElementById('prestigeGain').textContent = new_prestige_gain;
    document.getElementById('prestigeBonus').textContent = `+${bonus_per.toFixed(2)}x (${(game.prestige_multiplier + bonus_per).toFixed(2)}x total)`;
    
    // Show unlocks preview
    const unlocks_div = document.getElementById('unlocksPreview');
    unlocks_div.innerHTML = '';
    
    const future_prestige = game.prestige + new_prestige_gain;
    for (const category in QUOTES_DATABASE) {
        if (QUOTES_DATABASE[category].prestige_unlock <= future_prestige && !game.unlocked_categories.has(category)) {
            const badge = document.createElement('div');
            badge.className = 'unlock-badge';
            badge.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            unlocks_div.appendChild(badge);
        }
    }
    
    if (unlocks_div.children.length === 0) {
        unlocks_div.innerHTML = '<span style="color: var(--text-muted); font-size: 12px;">No new categories at this prestige level</span>';
    }
    
    document.getElementById('prestigeModal').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
}

function close_prestige() {
    document.getElementById('prestigeModal').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
}

function confirm_prestige() {
    game.prestige_reset();
    close_prestige();
    update_display();
    reset_quote();
}

// ============================================
// TYPING ENGINE
// ============================================
function reset_quote() {
    const quote = game.get_random_quote();
    document.getElementById('currentQuote').textContent = quote;
    document.getElementById('totalChars').textContent = quote.length;
    document.getElementById('typingInput').value = '';
    document.getElementById('inputProgress').style.width = '0%';
    game.start_time = Date.now();
}

function check_quote_match() {
    const input = document.getElementById('typingInput').value;
    const target = game.current_quote;
    
    if (input === target) {
        return true;
    }
    return false;
}

function on_typing_input() {
    const input = document.getElementById('typingInput').value;
    const target = game.current_quote;
    
    // Update progress bar
    const progress = (input.length / target.length) * 100;
    document.getElementById('inputProgress').style.width = Math.min(progress, 100) + '%';
    
    // Update character count
    document.getElementById('typedChars').textContent = input.length;
    
    // Update WPM display
    if (game.start_time) {
        const elapsed = (Date.now() - game.start_time) / 1000; // seconds
        if (elapsed > 0.5 && input.length > 0) {
            const wpm = (input.length / 5) / (elapsed / 60);
            document.getElementById('wpmDisplay').textContent = ` | ${wpm.toFixed(1)} WPM`;
        }
    }
    
    // Check for completion
    if (check_quote_match()) {
        on_quote_completed();
    }
}

function on_quote_completed() {
    const completion_time = (Date.now() - game.start_time) / 1000; // seconds
    const characters_earned = game.calculate_reward(completion_time);
    
    game.characters += characters_earned;
    game.save_to_storage();
    
    // Visual feedback
    show_character_popup(characters_earned);
    
    // Reset for next quote
    setTimeout(() => {
        reset_quote();
        update_display();
    }, 500);
}

function show_character_popup(characters) {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 32px;
        font-weight: bold;
        color: #10b981;
        pointer-events: none;
        z-index: 2000;
        animation: popup-float 1s ease-out forwards;
    `;
    popup.textContent = '+' + characters + ' characters!';
    document.body.appendChild(popup);
    
    setTimeout(() => popup.remove(), 1000);
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes popup-float {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -150%) scale(1.2);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// EVENT LISTENERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    game.load_from_storage();
    reset_quote();
    update_display();
    
    // Start game loop for passive income
    game_loop();
    
    // Typing
    document.getElementById('typingInput').addEventListener('input', on_typing_input);
    
    // Shop
    document.getElementById('shopBtn').addEventListener('click', open_shop);
    document.getElementById('closeShop').addEventListener('click', close_shop);
    
    // Shop tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            current_tab = e.target.dataset.tab;
            render_shop();
        });
    });
    
    // Prestige
    document.getElementById('prestigeBtn').addEventListener('click', open_prestige);
    document.getElementById('closePrestige').addEventListener('click', close_prestige);
    document.getElementById('confirmPrestige').addEventListener('click', confirm_prestige);
    
    // Overlay click to close
    document.getElementById('overlay').addEventListener('click', () => {
        close_shop();
        close_prestige();
    });
    
    // Focus input on load
    document.getElementById('typingInput').focus();
});
