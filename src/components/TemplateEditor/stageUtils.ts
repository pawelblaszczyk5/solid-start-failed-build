import Konva from 'konva';

export function initializeStageCanvas({
  stage,
  tansparentStage,
  width,
  height,
  ratio,
}: {
  stage: Konva.Stage;
  tansparentStage: Konva.Stage;
  width: number;
  height: number;
  ratio: number;
}) {
  stage.width(width);
  stage.height(height);
  stage.destroyChildren();

  tansparentStage.width(width);
  tansparentStage.height(height);
  tansparentStage.destroyChildren();

  let templateWidth = width * 0.85;
  let templateHeight = templateWidth * ratio;
  if (templateHeight > height * 0.85) {
    templateHeight = height * 0.85;
    templateWidth = templateHeight / ratio;
  }
  const layer = new Konva.Layer();
  const unclickableLayer = new Konva.Layer();
  stage.add(layer);
  tansparentStage.add(unclickableLayer);
  const group = new Konva.Group({
    x: width / 2,
    y: height / 2,
    draggable: false,
  });
  unclickableLayer.add(group);
  const rect = new Konva.Rect({
    x: -width / 2,
    y: -height / 2,
    width: width,
    height: height,
    fill: 'rgb(39,39,42)',
    opacity: 0.75,
  });
  group.add(rect);
  const cutShape = new Konva.Rect({
    x: -templateWidth / 2,
    y: -templateHeight / 2,
    width: templateWidth,
    height: templateHeight,
    fill: 'rgb(39,39,42)',
    stroke: 'black',
    strokeWidth: 0,
    globalCompositeOperation: 'destination-out',
  });
  group.add(cutShape);
  const image = new Image();
  image.src =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgB7dxBDcQwEARB3ylv86dmGiaQ0Gitqii05ju/c867Bth7rwn+ixRBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkJhnyhPbvXdNYCExgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxgsQIEiNIjCAxHzqHB36a50gVAAAAAElFTkSuQmCC';
  group.cache();
  var templateRect = new Konva.Rect({
    x: (width - templateWidth) / 2,
    y: (height - templateHeight) / 2,
    width: templateWidth,
    height: templateHeight,
    fillPatternImage: image,
    stroke: 'black',
    strokeWidth: 0.5,
  });
  // add the shape to the layer
  layer.add(templateRect);
  return layer;
}
