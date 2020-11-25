import {useState} from 'react';
import SpyScroll from 'components/SpyScroll';
import Users from 'components/Users';
import Foo from 'components/Foo';
import './App.css';

function App() {
  const [isScrollSpyVisible, setIsScrollSpyVisible] = useState(true);

  function toggleScrollSpy() {
    setIsScrollSpyVisible(v => !v);
  }
  return (
    <div className="App">
      <Foo />
      {isScrollSpyVisible && <SpyScroll />}
      <button onClick={toggleScrollSpy}>Toggle Scroll Spy</button>
      <Users />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac arcu eget dolor malesuada
        ultrices eu eget est. Nam elementum, enim quis feugiat aliquam, velit mi tincidunt sapien,
        quis mollis urna dui vitae libero. Fusce tincidunt suscipit leo, at vestibulum eros blandit
        ut. Integer a lorem neque. Praesent a sem non erat feugiat fringilla. Proin vitae orci
        bibendum velit gravida pellentesque. Praesent lacinia est quis tincidunt efficitur. Praesent
        eget finibus nulla. Phasellus aliquam gravida justo, et dictum urna pellentesque at. In
        aliquam quam in placerat vestibulum. Sed imperdiet risus ac mauris mollis, sit amet blandit
        mi venenatis. Mauris ex eros, interdum ac pretium id, finibus in purus. Aliquam erat
        volutpat. Vestibulum congue tellus a auctor ultricies. Suspendisse sodales gravida mi, eget
        suscipit lorem molestie nec. Quisque nec leo et odio luctus imperdiet. In lacinia augue in
        justo tincidunt lacinia. Ut cursus sem nec nisi eleifend, quis semper ligula commodo. Cras
        vel placerat nisl. Nunc ultricies cursus magna sed varius. Praesent hendrerit sem purus, ac
        scelerisque lorem elementum vel. Cras sed turpis quis diam vestibulum sagittis. Vivamus
        malesuada purus nec diam ultrices, et blandit tellus luctus. Nunc interdum sit amet diam at
        molestie. Integer non turpis et magna dapibus dignissim. Morbi a velit tristique augue
        commodo porttitor. Donec leo elit, malesuada quis sem eu, tempus eleifend sem. Donec laoreet
        ac nisi eu auctor. Integer ullamcorper lectus ut condimentum consectetur. Etiam lacinia
        velit purus, sit amet vehicula purus bibendum vel. Vestibulum vestibulum mauris vel ipsum
        feugiat, ac efficitur augue viverra. Suspendisse ac sem tristique, placerat turpis
        tincidunt, iaculis nisi. Donec cursus eros a imperdiet rutrum. In venenatis elit id urna
        fermentum maximus. Nunc in risus rutrum, faucibus enim sed, efficitur metus. Nulla tristique
        sem mattis tincidunt dapibus. Quisque aliquam posuere nunc, in dictum magna semper ut.
        Aenean sagittis congue libero, sit amet ultrices sapien accumsan ut. Aliquam commodo mi
        sapien, sed scelerisque lacus malesuada ac. Integer id erat fringilla, ullamcorper nibh nec,
        volutpat mi. Pellentesque at euismod massa. Vivamus in malesuada felis, nec auctor tortor.
        Nulla ac varius est. Mauris ut purus volutpat, mattis lacus at, consectetur risus.
        Vestibulum luctus ipsum diam, eget facilisis felis laoreet dapibus. Vivamus bibendum
        tincidunt molestie. Fusce vitae urna luctus, egestas justo et, posuere est. Duis gravida
        dolor vel mi placerat, ac commodo est tristique. Morbi ex turpis, pulvinar nec auctor eu,
        semper eu neque. Cras ullamcorper tincidunt metus eget ultricies. Duis sollicitudin, quam
        vitae euismod dignissim, magna ligula luctus elit, eget ornare felis lorem sed felis. Ut
        sollicitudin tempus sem in porttitor. In augue est, tincidunt ac feugiat id, fringilla eget
        enim. Duis placerat gravida est vitae dictum. Sed pretium ex a aliquam sagittis. Aenean
        lacinia arcu risus, eget pretium ex venenatis id. Nulla lectus arcu, laoreet a lectus vel,
        efficitur faucibus turpis. Sed eleifend vel lectus et elementum. Cras sit amet pretium
        dolor. Nulla non orci nec erat egestas laoreet tempor vitae dui.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac arcu eget dolor malesuada
        ultrices eu eget est. Nam elementum, enim quis feugiat aliquam, velit mi tincidunt sapien,
        quis mollis urna dui vitae libero. Fusce tincidunt suscipit leo, at vestibulum eros blandit
        ut. Integer a lorem neque. Praesent a sem non erat feugiat fringilla. Proin vitae orci
        bibendum velit gravida pellentesque. Praesent lacinia est quis tincidunt efficitur. Praesent
        eget finibus nulla. Phasellus aliquam gravida justo, et dictum urna pellentesque at. In
        aliquam quam in placerat vestibulum. Sed imperdiet risus ac mauris mollis, sit amet blandit
        mi venenatis. Mauris ex eros, interdum ac pretium id, finibus in purus. Aliquam erat
        volutpat. Vestibulum congue tellus a auctor ultricies. Suspendisse sodales gravida mi, eget
        suscipit lorem molestie nec. Quisque nec leo et odio luctus imperdiet. In lacinia augue in
        justo tincidunt lacinia. Ut cursus sem nec nisi eleifend, quis semper ligula commodo. Cras
        vel placerat nisl. Nunc ultricies cursus magna sed varius. Praesent hendrerit sem purus, ac
        scelerisque lorem elementum vel. Cras sed turpis quis diam vestibulum sagittis. Vivamus
        malesuada purus nec diam ultrices, et blandit tellus luctus. Nunc interdum sit amet diam at
        molestie. Integer non turpis et magna dapibus dignissim. Morbi a velit tristique augue
        commodo porttitor. Donec leo elit, malesuada quis sem eu, tempus eleifend sem. Donec laoreet
        ac nisi eu auctor. Integer ullamcorper lectus ut condimentum consectetur. Etiam lacinia
        velit purus, sit amet vehicula purus bibendum vel. Vestibulum vestibulum mauris vel ipsum
        feugiat, ac efficitur augue viverra. Suspendisse ac sem tristique, placerat turpis
        tincidunt, iaculis nisi. Donec cursus eros a imperdiet rutrum. In venenatis elit id urna
        fermentum maximus. Nunc in risus rutrum, faucibus enim sed, efficitur metus. Nulla tristique
        sem mattis tincidunt dapibus. Quisque aliquam posuere nunc, in dictum magna semper ut.
        Aenean sagittis congue libero, sit amet ultrices sapien accumsan ut. Aliquam commodo mi
        sapien, sed scelerisque lacus malesuada ac. Integer id erat fringilla, ullamcorper nibh nec,
        volutpat mi. Pellentesque at euismod massa. Vivamus in malesuada felis, nec auctor tortor.
        Nulla ac varius est. Mauris ut purus volutpat, mattis lacus at, consectetur risus.
        Vestibulum luctus ipsum diam, eget facilisis felis laoreet dapibus. Vivamus bibendum
        tincidunt molestie. Fusce vitae urna luctus, egestas justo et, posuere est. Duis gravida
        dolor vel mi placerat, ac commodo est tristique. Morbi ex turpis, pulvinar nec auctor eu,
        semper eu neque. Cras ullamcorper tincidunt metus eget ultricies. Duis sollicitudin, quam
        vitae euismod dignissim, magna ligula luctus elit, eget ornare felis lorem sed felis. Ut
        sollicitudin tempus sem in porttitor. In augue est, tincidunt ac feugiat id, fringilla eget
        enim. Duis placerat gravida est vitae dictum. Sed pretium ex a aliquam sagittis. Aenean
        lacinia arcu risus, eget pretium ex venenatis id. Nulla lectus arcu, laoreet a lectus vel,
        efficitur faucibus turpis. Sed eleifend vel lectus et elementum. Cras sit amet pretium
        dolor. Nulla non orci nec erat egestas laoreet tempor vitae dui.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac arcu eget dolor malesuada
        ultrices eu eget est. Nam elementum, enim quis feugiat aliquam, velit mi tincidunt sapien,
        quis mollis urna dui vitae libero. Fusce tincidunt suscipit leo, at vestibulum eros blandit
        ut. Integer a lorem neque. Praesent a sem non erat feugiat fringilla. Proin vitae orci
        bibendum velit gravida pellentesque. Praesent lacinia est quis tincidunt efficitur. Praesent
        eget finibus nulla. Phasellus aliquam gravida justo, et dictum urna pellentesque at. In
        aliquam quam in placerat vestibulum. Sed imperdiet risus ac mauris mollis, sit amet blandit
        mi venenatis. Mauris ex eros, interdum ac pretium id, finibus in purus. Aliquam erat
        volutpat. Vestibulum congue tellus a auctor ultricies. Suspendisse sodales gravida mi, eget
        suscipit lorem molestie nec. Quisque nec leo et odio luctus imperdiet. In lacinia augue in
        justo tincidunt lacinia. Ut cursus sem nec nisi eleifend, quis semper ligula commodo. Cras
        vel placerat nisl. Nunc ultricies cursus magna sed varius. Praesent hendrerit sem purus, ac
        scelerisque lorem elementum vel. Cras sed turpis quis diam vestibulum sagittis. Vivamus
        malesuada purus nec diam ultrices, et blandit tellus luctus. Nunc interdum sit amet diam at
        molestie. Integer non turpis et magna dapibus dignissim. Morbi a velit tristique augue
        commodo porttitor. Donec leo elit, malesuada quis sem eu, tempus eleifend sem. Donec laoreet
        ac nisi eu auctor. Integer ullamcorper lectus ut condimentum consectetur. Etiam lacinia
        velit purus, sit amet vehicula purus bibendum vel. Vestibulum vestibulum mauris vel ipsum
        feugiat, ac efficitur augue viverra. Suspendisse ac sem tristique, placerat turpis
        tincidunt, iaculis nisi. Donec cursus eros a imperdiet rutrum. In venenatis elit id urna
        fermentum maximus. Nunc in risus rutrum, faucibus enim sed, efficitur metus. Nulla tristique
        sem mattis tincidunt dapibus. Quisque aliquam posuere nunc, in dictum magna semper ut.
        Aenean sagittis congue libero, sit amet ultrices sapien accumsan ut. Aliquam commodo mi
        sapien, sed scelerisque lacus malesuada ac. Integer id erat fringilla, ullamcorper nibh nec,
        volutpat mi. Pellentesque at euismod massa. Vivamus in malesuada felis, nec auctor tortor.
        Nulla ac varius est. Mauris ut purus volutpat, mattis lacus at, consectetur risus.
        Vestibulum luctus ipsum diam, eget facilisis felis laoreet dapibus. Vivamus bibendum
        tincidunt molestie. Fusce vitae urna luctus, egestas justo et, posuere est. Duis gravida
        dolor vel mi placerat, ac commodo est tristique. Morbi ex turpis, pulvinar nec auctor eu,
        semper eu neque. Cras ullamcorper tincidunt metus eget ultricies. Duis sollicitudin, quam
        vitae euismod dignissim, magna ligula luctus elit, eget ornare felis lorem sed felis. Ut
        sollicitudin tempus sem in porttitor. In augue est, tincidunt ac feugiat id, fringilla eget
        enim. Duis placerat gravida est vitae dictum. Sed pretium ex a aliquam sagittis. Aenean
        lacinia arcu risus, eget pretium ex venenatis id. Nulla lectus arcu, laoreet a lectus vel,
        efficitur faucibus turpis. Sed eleifend vel lectus et elementum. Cras sit amet pretium
        dolor. Nulla non orci nec erat egestas laoreet tempor vitae dui.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac arcu eget dolor malesuada
        ultrices eu eget est. Nam elementum, enim quis feugiat aliquam, velit mi tincidunt sapien,
        quis mollis urna dui vitae libero. Fusce tincidunt suscipit leo, at vestibulum eros blandit
        ut. Integer a lorem neque. Praesent a sem non erat feugiat fringilla. Proin vitae orci
        bibendum velit gravida pellentesque. Praesent lacinia est quis tincidunt efficitur. Praesent
        eget finibus nulla. Phasellus aliquam gravida justo, et dictum urna pellentesque at. In
        aliquam quam in placerat vestibulum. Sed imperdiet risus ac mauris mollis, sit amet blandit
        mi venenatis. Mauris ex eros, interdum ac pretium id, finibus in purus. Aliquam erat
        volutpat. Vestibulum congue tellus a auctor ultricies. Suspendisse sodales gravida mi, eget
        suscipit lorem molestie nec. Quisque nec leo et odio luctus imperdiet. In lacinia augue in
        justo tincidunt lacinia. Ut cursus sem nec nisi eleifend, quis semper ligula commodo. Cras
        vel placerat nisl. Nunc ultricies cursus magna sed varius. Praesent hendrerit sem purus, ac
        scelerisque lorem elementum vel. Cras sed turpis quis diam vestibulum sagittis. Vivamus
        malesuada purus nec diam ultrices, et blandit tellus luctus. Nunc interdum sit amet diam at
        molestie. Integer non turpis et magna dapibus dignissim. Morbi a velit tristique augue
        commodo porttitor. Donec leo elit, malesuada quis sem eu, tempus eleifend sem. Donec laoreet
        ac nisi eu auctor. Integer ullamcorper lectus ut condimentum consectetur. Etiam lacinia
        velit purus, sit amet vehicula purus bibendum vel. Vestibulum vestibulum mauris vel ipsum
        feugiat, ac efficitur augue viverra. Suspendisse ac sem tristique, placerat turpis
        tincidunt, iaculis nisi. Donec cursus eros a imperdiet rutrum. In venenatis elit id urna
        fermentum maximus. Nunc in risus rutrum, faucibus enim sed, efficitur metus. Nulla tristique
        sem mattis tincidunt dapibus. Quisque aliquam posuere nunc, in dictum magna semper ut.
        Aenean sagittis congue libero, sit amet ultrices sapien accumsan ut. Aliquam commodo mi
        sapien, sed scelerisque lacus malesuada ac. Integer id erat fringilla, ullamcorper nibh nec,
        volutpat mi. Pellentesque at euismod massa. Vivamus in malesuada felis, nec auctor tortor.
        Nulla ac varius est. Mauris ut purus volutpat, mattis lacus at, consectetur risus.
        Vestibulum luctus ipsum diam, eget facilisis felis laoreet dapibus. Vivamus bibendum
        tincidunt molestie. Fusce vitae urna luctus, egestas justo et, posuere est. Duis gravida
        dolor vel mi placerat, ac commodo est tristique. Morbi ex turpis, pulvinar nec auctor eu,
        semper eu neque. Cras ullamcorper tincidunt metus eget ultricies. Duis sollicitudin, quam
        vitae euismod dignissim, magna ligula luctus elit, eget ornare felis lorem sed felis. Ut
        sollicitudin tempus sem in porttitor. In augue est, tincidunt ac feugiat id, fringilla eget
        enim. Duis placerat gravida est vitae dictum. Sed pretium ex a aliquam sagittis. Aenean
        lacinia arcu risus, eget pretium ex venenatis id. Nulla lectus arcu, laoreet a lectus vel,
        efficitur faucibus turpis. Sed eleifend vel lectus et elementum. Cras sit amet pretium
        dolor. Nulla non orci nec erat egestas laoreet tempor vitae dui.
      </div>
    </div>
  );
}

export default App;
