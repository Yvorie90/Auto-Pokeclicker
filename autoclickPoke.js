
//GLOBAL DATA
let startmenu = document.querySelector('#startMenu');

//AUTOCLICKER
let autoclicker = false;
async function autoclickerToggle() {
    autoclicker = !autoclicker;
    if(autoclicker) {
        document.querySelector('#autoclicker').classList.remove('btn-primary');
        document.querySelector('#autoclicker').classList.add('btn-success');
    } else {
        document.querySelector('#autoclicker').classList.add('btn-primary');
        document.querySelector('#autoclicker').classList.remove('btn-success');
    }
    while(autoclicker) {
        await new Promise((r) => { setTimeout(r, 0.01); });
        let enemy = document.querySelectorAll('.enemy')[0];
        if(enemy != null && !startmenu.classList.contains('show')) enemy.click();
    }
}

//AUTOGYM
let autogym = false;
async function autogymToggle() {
    autogym = !autogym;
    if(autogym) {
        document.querySelector('#autogym').classList.remove('btn-primary');
        document.querySelector('#autogym').classList.add('btn-success');
    } else {
        document.querySelector('#autogym').classList.add('btn-primary');
        document.querySelector('#autogym').classList.remove('btn-success');
    }
    while(autogym) {
        await new Promise((r) => { setTimeout(r, 0.1); });
        let gym = document.querySelector('.col-4.no-gutters div div:nth-child(2) button:first-child');
        //console.log(gym);
        if(gym != null && !startmenu.classList.contains('show') && gym.classList.contains('btn-success' ) && document.querySelectorAll('.enemy')[0] == null) gym.click();
    }
}

//AUTOFARM
let autofarm = false;
async function autofarmToggle() {
    autofarm = !autofarm;
    if(autofarm) {
        document.querySelector('#autofarm').classList.remove('btn-primary');
        document.querySelector('#autofarm').classList.add('btn-success');
    } else {
        document.querySelector('#autofarm').classList.add('btn-primary');
        document.querySelector('#autofarm').classList.remove('btn-success');
    }
    while(autofarm) {
        await new Promise((r) => { setTimeout(r, 1000); });
        if(!startmenu.classList.contains('show')) {
            document.querySelector('#seeds div:last-child div:first-child button').click();
            document.querySelector('#seeds div:last-child div:last-child button').click();
        }
    }
}

//AUTOHATCH
let autohatch = false;
async function autohatchToggle() {
    autohatch = !autohatch;
    if(autohatch) {
        document.querySelector('#autohatch').classList.remove('btn-primary');
        document.querySelector('#autohatch').classList.add('btn-success');
    } else {
        document.querySelector('#autohatch').classList.add('btn-primary');
        document.querySelector('#autohatch').classList.remove('btn-success');
    }
    while(autohatch) {
        await new Promise((r) => { setTimeout(r, 100); });
        let eggs = document.querySelectorAll('#breeding-pokemon div:nth-child(2) ul li:not(.disabled)');
        if(eggs == null) continue;
        let egg = Array.from(eggs).find(e => { return e.style.display != 'none' });
        if(egg == null) continue;
        if(!startmenu.classList.contains('show')) egg.querySelector('a').click();
    }
}


//AUTODUNGEOM
let autodungeon = false;
async function autodungeonToggle() {
    autodungeon = !autodungeon;
    if(autodungeon) {
        document.querySelector('#autodungeon').classList.remove('btn-primary');
        document.querySelector('#autodungeon').classList.add('btn-success');
    } else {
        document.querySelector('#autodungeon').classList.add('btn-primary');
        document.querySelector('#autodungeon').classList.remove('btn-success');
    }

    while(autodungeon){
        await new Promise((r) => { setTimeout(r, 0.01); });
        //console.log('test');

        let dungeon = document.querySelector('.col-4.no-gutters div button');
        if(dungeon != null && !startmenu.classList.contains('show') && document.querySelectorAll('.enemy')[0] == null) dungeon.click();

        let alldungeon = document.querySelector('.dungeon-board');

        let chest_btn = document.querySelector('.btn-warning.chest-button');
        if(chest_btn != null && !startmenu.classList.contains('show') && openchest) chest_btn.click();

        let boss_btn = document.querySelector('.btn-danger.dungeon-button');
        if(boss_btn != null && !startmenu.classList.contains('show')) boss_btn.click();
        

        let boss_tile = document.querySelector('.tile-boss');
        if(boss_tile != null && !startmenu.classList.contains('show')){ 
            boss_tile.click();
            await(1);
            let boss_btn = document.querySelector('.btn-danger.dungeon-button');
            if(boss_btn != null && !startmenu.classList.contains('show')) boss_btn.click();
        };

        
        let chest_tile = document.querySelector('.tile-chest.tile-visited');
        if(chest_tile != null && !startmenu.classList.contains('show') && openchest){
            chest_tile.click();
            await(1);
            let chest_btn = document.querySelector('.btn-warning.chest-button');
            if(chest_btn != null && !startmenu.classList.contains('show') && openchest) chest_btn.click();

        }  

        let chest_tiles = document.querySelectorAll('.tile-chest')
        if(chest_tiles != null && !startmenu.classList.contains('show')){ 
            chest_tiles.forEach(e => {
                if(e != null && !startmenu.classList.contains('show') && !e.classList.contains('tile-visited')) e.click();
                let chest_btn = document.querySelector('.btn-warning.chest-button');
                if(chest_btn != null && !startmenu.classList.contains('show') && openchest) chest_btn.click();
            })
        };


        let unknown_tiles = document.querySelectorAll('.tile-empty:not(.tile-visited)')
        if(unknown_tiles != null && !startmenu.classList.contains('show')){ 
            unknown_tiles.forEach(e => {
                if(e != null && !startmenu.classList.contains('show') && document.querySelectorAll('.enemy')[0] == null ) e.click();
            })
        };
        

        let enemy_tiles = document.querySelectorAll('.tile-enemy')
        let rand_tile = Math.floor(Math.random()*enemy_tiles.length);
        if(enemy_tiles != null && !startmenu.classList.contains('show') && document.querySelectorAll('.enemy')[0] == null && enemy_tiles[rand_tile] != null){ 
            enemy_tiles[rand_tile].click();
        };


        let invisible_tiles = document.querySelectorAll('.tile-invisible')
        let rand_inv_tile = Math.floor(Math.random()*invisible_tiles.length);
        if(invisible_tiles != null && !startmenu.classList.contains('show') && document.querySelectorAll('.enemy')[0] == null && invisible_tiles[rand_inv_tile] != null){ 
            invisible_tiles[rand_inv_tile].click();
        };
       
    };
};

let openchest = false;
async function openchestToggle() {
    openchest = !openchest;
    if(openchest) {
        document.querySelector('#openchest').classList.remove('btn-primary');
        document.querySelector('#openchest').classList.add('btn-success');
    } else {
        document.querySelector('#openchest').classList.add('btn-primary');
        document.querySelector('#openchest').classList.remove('btn-success');
    }

}

//ADD MENU
(async () => {
    console.log('LOADING ADDONS...');
    document.querySelectorAll('#breedingDisplay button')[0].click();
    await new Promise((r) => { setTimeout(r, 1000); });
    document.querySelector('#breedingModal').click();
    document.querySelector('#middle-top-sort-column').innerHTML += `
    <div id="addonsContainer" class="card sortable border-secondary mb-3" draggable="true">
        <div class="card-header p-0" data-toggle="collapse" href="#addonsBody"><span style="text-align:center">Add-ons</span></div>
        <div id="addonsBody" class="card-body show p-0">
            <table class="table table-sm m-0">
                <tbody>
                    <tr><td class="p-0"><button id="autoclicker" class="btn btn-block btn-primary m-0" onclick="autoclickerToggle()">Autoclick</button></td></tr>
                    <tr><td class="p-0"><button id="autofarm" class="btn btn-block btn-primary m-0" onclick="autofarmToggle()">Autofarm</button></td></tr>
                    <tr><td class="p-0"><button id="autohatch" class="btn btn-block btn-primary m-0" onclick="autohatchToggle()">Autohatch</button></td></tr>
                    <tr><td class="p-0"><button id="autogym" class="btn btn-block btn-primary m-0" onclick="autogymToggle()">Autogym</button></td></tr>
                    <tr><td class="p-0"><button id="autodungeon" class="btn btn-block btn-primary m-0" onclick="autodungeonToggle()">Autodungeon</button></td></tr>
                    <tr><td class="p-0"><button id="openchest" class="btn btn-block btn-primary m-0" onclick="openchestToggle()">Open Chests</button></td></tr>
                </tbody>
            </table>
        </div>
    </div>`;
    console.log('MENU INSTALLED !');
    console.log('Addons loaded !')
})();