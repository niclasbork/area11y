'use client'

import * as THREE from 'three'
import type { ComponentProps } from 'react'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
	MarchingCubes,
	MarchingCube,
	Environment,
	Bounds,
	Text,
} from '@react-three/drei'
import { Physics, RigidBody, BallCollider } from '@react-three/rapier'

type RigidBodyComponentProps = ComponentProps<typeof RigidBody>

type MetaBallProps = RigidBodyComponentProps & {
	color: THREE.ColorRepresentation
	vec?: THREE.Vector3
}

type RigidBodyApiLike = {
	applyImpulse: (impulse: THREE.Vector3) => void
	translation: () => THREE.Vector3
}

type KinematicBodyApiLike = {
	setNextKinematicTranslation: (value: THREE.Vector3) => void
}

function MetaBall({
	color,
	vec = new THREE.Vector3(),
	...props
}: MetaBallProps) {
	const resolvedColor =
		color instanceof THREE.Color ? color : new THREE.Color(color)
	const api = useRef<RigidBodyApiLike | null>(null)
	useFrame((state, delta) => {
		delta = Math.min(delta, 0.1)
		if (!api.current) return
		api.current.applyImpulse(
			vec
				.copy(api.current.translation())
				.normalize()
				.multiplyScalar(delta * -0.05)
		)
	})
	return (
		<RigidBody
			ref={(instance) => {
				api.current = instance as unknown as RigidBodyApiLike | null
			}}
			colliders={false}
			linearDamping={4}
			angularDamping={0.95}
			{...props}
		>
			<MarchingCube strength={0.35} subtract={6} color={resolvedColor} />
			<BallCollider args={[0.1]} />
		</RigidBody>
	)
}

type PointerProps = {
	vec?: THREE.Vector3
}

function Pointer({ vec = new THREE.Vector3() }: PointerProps) {
	const ref = useRef<KinematicBodyApiLike | null>(null)
	useFrame(({ pointer, viewport }) => {
		const { width, height } = viewport.getCurrentViewport()
		vec.set(pointer.x * (width / 2), pointer.y * (height / 2), 0)
		ref.current?.setNextKinematicTranslation(vec)
	})
	return (
		<RigidBody
			type='kinematicPosition'
			colliders={false}
			ref={(instance) => {
				ref.current = instance as unknown as KinematicBodyApiLike | null
			}}
		>
			<MarchingCube
				strength={0.5}
				subtract={10}
				color={new THREE.Color('#A3A3A3')}
			/>
			<BallCollider args={[0.1]} />
		</RigidBody>
	)
}

export default function App() {
	return (
		<Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 25 }}>
			<color attach='background' args={['#f0f0f0']} />
			<ambientLight intensity={1} />
			<Physics gravity={[0, 2, 0]}>
				<MarchingCubes
					resolution={80}
					maxPolyCount={10000}
					enableUvs={false}
					enableColors
				>
					<meshPhysicalMaterial
						vertexColors
						thickness={0.15}
						roughness={0}
					/>
					<MetaBall color='#0A0A0A' position={[1, 1, 0.5]} />
					<MetaBall color='#A3A3A3' position={[-1, -1, -0.5]} />
					<MetaBall color='#262626' position={[2, 2, 0.5]} />
					<MetaBall color='#E5E5E5' position={[-2, -2, -0.5]} />
					<MetaBall color='#737373' position={[3, 3, 0.5]} />
					<MetaBall color='#FAFAFA' position={[-3, -3, -0.5]} />
					<Pointer />
				</MarchingCubes>
			</Physics>
			<Environment files='https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/industrial_workshop_foundry_1k.hdr' />
			{/* Zoom to fit a 1/1/1 box to match the marching cubes */}
			<Bounds fit clip observe margin={1}>
				<mesh visible={false}>
					<boxGeometry />
				</mesh>
			</Bounds>
		</Canvas>
	)
}
