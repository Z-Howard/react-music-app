import favorMusicCss from './favorMusicPage.module.scss';
import { Droppable } from './Droppable';
import { Draggable } from './Draggable';
import React, { useState } from 'react';
import {
	Active,
	Announcements,
	closestCenter,
	CollisionDetection,
	DragOverlay,
	DndContext,
	DropAnimation,
	KeyboardSensor,
	KeyboardCoordinateGetter,
	Modifiers,
	MouseSensor,
	PointerSensor,
	MeasuringConfiguration,
	PointerActivationConstraint,
	ScreenReaderInstructions,
	TouchSensor,
	UniqueIdentifier,
	useSensor,
	useSensors,
	defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
	arrayMove,
	useSortable,
	SortableContext,
	sortableKeyboardCoordinates,
	SortingStrategy,
	rectSortingStrategy,
	defaultAnimateLayoutChanges,
	NewIndexGetter,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem';
import { Item } from './Item';

export default function FavorMusicPage(params) {
	const [activeId, setActiveId] = useState(null);
	const [items, setItems] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
	const animation = defaultAnimateLayoutChanges;
	// const sensors = useSensors(
	// 	useSensor(PointerSensor),
	// 	useSensor(KeyboardSensor, {
	// 		coordinateGetter: sortableKeyboardCoordinates,
	// 	})
	// );
	const sensors = useSensors(
		useSensor(PointerSensor, {
			DistanceConstraint: {
				distance: 200,
			},
		}),
		useSensor(MouseSensor, {
			delay: 10,
			tolerance: 10,
		}),
		useSensor(TouchSensor, {
			delay: 10,
			tolerance: 10,
		}),
		useSensor(KeyboardSensor, {
			// Disable smooth scrolling in Cypress automated tests
			scrollBehavior: 'Cypress' in window ? 'auto' : undefined,
			sortableKeyboardCoordinates,
		})
	);
	const handleRemove = true
		? (id: UniqueIdentifier) => setItems(items => items.filter(item => item !== id))
		: undefined;

	return (
		<div className={favorMusicCss['container']}>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}>
				<SortableContext items={items} strategy={rectSortingStrategy}>
					<div className={favorMusicCss['gridContainer']}>
						{items.map((id, index) => (
							<SortableItem
								key={id}
								id={id}
								handle={false}
								index={index}
								style={() => {}}
								wrapperStyle={() => {}}
								onRemove={handleRemove}
								defaultAnimateLayoutChanges={animation}
							/>
						))}
					</div>
				</SortableContext>
				<DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
			</DndContext>
		</div>
	);
	function handleDragStart(event) {
		const { active } = event;
		setActiveId(active.id);
	}

	function handleDragEnd(event) {
		console.log(event);
		const { active, over } = event;

		if (active.id !== over.id) {
			setItems(items => {
				const oldIndex = items.indexOf(active.id);
				const newIndex = items.indexOf(over.id);

				return arrayMove(items, oldIndex, newIndex);
			});
			console.log(items);
		}

		setActiveId(null);
	}
}
